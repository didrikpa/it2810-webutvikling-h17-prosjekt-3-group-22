import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Content, List } from 'native-base';
import moment from 'moment'

import HeaderMenu from '../HeaderMenu'
import NewNoteModal from './NewNoteModal'
import Note from './Note'

export default class NoteContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      newModalOpen: false,

    }
  }

  componentWillMount = async () => {
    //AsyncStorage.clear()
    let localNotes = JSON.parse(await AsyncStorage.getItem('notes'))
    this.setState({
      notes: localNotes || []
    })
  }

  updateLocalStorage = async () => {
    const { notes } = this.state
    await AsyncStorage.setItem('notes', JSON.stringify(notes))
  }

  updateState = (state) => {
    this.setState(state, () => {
      this.updateLocalStorage()
    })
  }

  toggleNewModal = () => {
    this.setState({
      newModalOpen: !this.state.newModalOpen
    })
  }

  onButtonSaveClick = (title, content) => {
    const { notes } = this.state
    let note = {
      title: title,
      content: content,
      date: moment()
    }

    notes.push(note)
    this.updateState({
      notes: notes,
      newModalOpen: false
    })
  }

  deleteItem = (note) => {
    let { notes } = this.state
    const i = notes.indexOf(note)
    if (i >= 0) {
      notes.splice(i,1)
      this.updateState({
        notes: notes
      })
    } else {
      console.error(`[NotesContainer](checkBoxClick) Couldn't find object at index ${i}`)
    }
  }



  render() {
    const { newModalOpen, notes } = this.state

    return (
      <Content>
        <HeaderMenu title={'Notes'}
        toggleModal={this.toggleNewModal}/>


        <NewNoteModal
        toggleModal={this.toggleNewModal}
        onButtonSaveClick={this.onButtonSaveClick}
        isOpen={ newModalOpen }/>

       <List>
        {notes.sort((b,a) => {
          return moment(a.date).unix() - moment(b.date).unix()}).map((note) =>
          <Note
            note={note}
            key={note.date}
            deleteItem={this.deleteItem}
            />)}
        </List>

      </Content>
    )
  }
}
