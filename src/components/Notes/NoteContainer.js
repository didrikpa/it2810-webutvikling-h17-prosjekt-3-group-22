 import React, { Component } from 'react'
 import { Container, Button, Divider, Grid, Header } from 'semantic-ui-react'

 import Navbar from '../Navbar'
 import Note from './Note'
 import NoteModal from './NoteModal'

 export default class NoteContainer extends Component {
    constructor(props) {
        super(props)

      this.state = {
          notes: [],
          isOpen: false
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

    onButtonClick = (title, content) => {
      const { notes } = this.state
      let note = {
        title: title,
        content: content,
        date: new Date()
      }
      notes.push(note)
      this.updateState({
        notes: notes
      })
    }

   deleteItem = (note) => {
     let { notes } = this.state
     const i = notes.indexOf(note)
     if (i >= 0) {
       notes.splice(i, 1)
       this.updateState({
         notes: notes
       })
     } else {
       console.error(`[NoteContainer](checkBoxClick) Couldn't find object at index ${i}`)
     }
   }

   toggleModal = () => {
     this.setState({
       isOpen: !this.state.isOpen
     })
   }

    render() {

      console.log(this.state.notes)
      const { notes, isOpen } = this.state
        return (
            <div>
              <Navbar />
              <Divider hidden />
              <Container text>

                <Grid width={16}>
                  <Grid.Column width={14}>
                    <Header as='h1'>Your Notes:</Header>
                  </Grid.Column>
                    <Grid.Column floated='right' width={2}>
                    <Button
                      icon='plus'
                      positive
                      onClick={ this.toggleModal } />
                      <NoteModal
                        open={ isOpen }
                        editMode='edit'
                        onClose={ this.toggleModal }
                        onButtonClick = { this.onButtonClick }
                      />
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
                { notes.map((note) =>
                  <Note key={note.date}
                        note={note}
                        deleteItem={ this.deleteItem }
                        onButtonClick={ this.onButtonClick }
                        isOpen={ isOpen }
                        toggleModal = { this.toggleModal }
                  />) }
              </Container>
            </div>
        )
    }
 }
