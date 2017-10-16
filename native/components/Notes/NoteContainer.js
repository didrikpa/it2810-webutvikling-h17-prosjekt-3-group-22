import React, { Component } from 'react'
import { Content } from 'native-base';
import HeaderMenu from '../HeaderMenu'
import NewNoteModal from './NewNoteModal'
import Note from './Note'

export default class NoteContainer extends Component {
  state = { activeItem: 'notes' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      newModalOpen: false,

    }
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

  render() {
    const { newModalOpen } = this.state

    return (
      <Content>
        <HeaderMenu title={'Notes'}
        toggleModal={this.toggleNewModal}/>


        <NewNoteModal
        toggleModal={this.toggleNewModal}
        isOpen={ newModalOpen }/>

        <Note/>
      </Content>
    )
  }
}
