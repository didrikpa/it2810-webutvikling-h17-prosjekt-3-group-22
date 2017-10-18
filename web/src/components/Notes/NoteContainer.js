import React, { Component } from 'react'
import { Divider, Button, Grid, Container, Header } from 'semantic-ui-react'
import moment from 'moment'

import Note from './Notes'
import NewNoteModal from './NewNoteModal'

export default class NoteContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            notes: [],
            newModalOpen: false
        }
    }

    /**
     * Use built in method to fetch Notes from localStorage on the host.
     * If localStoreage doesn't contain any Notes, set an empty list to avoid problems.
     */
    componentWillMount = () => {
        let localNotes = JSON.parse(localStorage.getItem('notes'))
        this.setState({
            notes: localNotes || []
        })
    }

    /**
     * This method is used to update localStorage on the host with the current state od the Component.
     */
    updateLocalStorage = () => {
        const { notes } = this.state
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    /**
     * This method is used as a wrapper for the Component setState() method.
     * It is used so that the localStorage is updated every time the state is finished setting.
     * @param state Changes to be added to state.
     */
    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    /**
     * Toggles new note modal on/off
     */
    toggleNewModal = () => {
        this.setState({
            newModalOpen: !this.state.newModalOpen
        })
    }

    /**
     * This method deletes a given event from the state.
     * @param note Note to be deleted.
     */
    deleteItem = (note) => {
        let { notes } = this.state
        const i = notes.indexOf(note)
        if (i >= 0) {
            notes.splice(i, 1)
            this.updateState({
                notes: notes
            })
        } else {
            console.error(`[NotesContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    /**
     * Creates a note if it does not exists, pushes new note to note list
     * @param title Title text for the given note
     * @param content Content text for the given note
     */
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

    render () {
        const { notes, newModalOpen } = this.state

        return (
            <div>
                <Divider hidden/>
                <Container text>
                    <Grid width={16}>
                        <Grid.Column width={14}>
                            <Header as='h1'>Your notes</Header>
                        </Grid.Column>
                        <Grid.Column width={2} floated='right'>
                            <Button
                                icon='plus'
                                positive
                                onClick={this.toggleNewModal} floated='right'/>
                            <NewNoteModal
                                isOpen={ newModalOpen }
                                onClose={this.toggleNewModal}
                                onButtonSaveClick={this.onButtonSaveClick}/>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden/>
                    {notes.sort((b, a) => {
                        return moment(a.date).unix() - moment(b.date).unix()
                    }).map((note) =>
                    <Note
                        note={note}
                        key={note.date}
                        deleteItem={this.deleteItem}
                        onButtonSaveClick={this.onButtonSaveClick}/>)}

                    { notes.length ?
                        undefined:
                        <Header as='h3' block textAlign='center'>
                            You have no notes
                        </Header>
                    }

                </Container>
            </div>
        )
    }
}
