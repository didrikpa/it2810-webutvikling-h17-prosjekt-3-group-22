import React, { Component } from 'react'
import { Divider, Button, Grid, Container, Header } from 'semantic-ui-react'

import Navbar from '../Navbar'
import Note from './Notes'
import NewNoteModal from './NewNoteModal'
import Footer from "../Footer";


export default class NoteContainer extends Component {
    constructor(props) {
        super(props)

      this.state = {
          notes: [],
          newModalOpen: false,
      }
    }
  componentWillMount = () => {
    //localStorage.clear()
    let localNotes = JSON.parse(localStorage.getItem('notes'))
    this.setState({
      notes: localNotes || []
    })
  }

  updateLocalStorage = () => {
    const { notes } = this.state
    localStorage.setItem('notes', JSON.stringify(notes))
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

    onButtonSaveClick = (title, content) => {
      const { notes } = this.state
      let note = {
        title: title,
        content: content,
        date: new Date()
      }

      notes.push(note)
      this.updateState({
        notes: notes,
        newModalOpen: false
      })

    }

    handleViewModal = (title, content) => {

    }




    render() {

      const { notes, newModalOpen } = this.state
      console.log("BEFORE RENDER")
      console.log(this.state.newModalOpen)

        return (
            <div>
                <Navbar />
              <Divider hidden/>
              <Container text>
                <Grid width={16}>
                  <Grid.Column width={14}>
                    <Header as='h1'>Your notes:</Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated='right'>
                    <Button
                      icon='plus'
                      positive
                      onClick={this.toggleNewModal}/>
                    <NewNoteModal
                      isOpen={ newModalOpen }
                      onClose={this.toggleNewModal}
                      onButtonSaveClick={this.onButtonSaveClick}/>

                  </Grid.Column>
                </Grid>
                <Divider hidden/>
                {notes.map((note) =>
                  <Note
                    note={note}
                    key={note.date}
                    deleteItem={this.deleteItem}
                    onButtonSaveClick={this.onButtonSaveClick}/>)}
              </Container>
              <Footer/>
            </div>
        )
    }
}
