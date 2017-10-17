import React, { Component } from 'react'
import { Segment, Button, Grid } from 'semantic-ui-react'
import moment from 'moment'

import ViewNoteModal from './ViewNoteModal'
import EditNoteModal from './EditNoteModal'
import DeleteModal from '../DeleteModal'

const dateStyle = {
    fontSize: '1rem',
    color: '#999999'
}

export default class Note extends Component {
    constructor (props) {
        super(props)

        this.state = {
            viewModalOpen: false,
            editModalOpen: false,
            deleteModalOpen: false,
            title: this.props.note.title,
            content: this.props.note.content,
            date: this.props.note.date
        }
    }

    handleDelete = () => {
        const { note, deleteItem } = this.props
        deleteItem(note)
    }

    toggleViewModal = () => {
        this.setState({
            viewModalOpen: !this.state.viewModalOpen
        })
    }

    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }

    toggleDeleteModal = () => {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
        })
    }

    render () {
        const { note, onButtonSaveClick } = this.props
        const { viewModalOpen, title, content, date, editModalOpen } = this.state

        return (

    <div>
      <Segment>
        <Grid
          columns='equal'
          width={16}
          verticalAlign="middle">

          <Grid.Column width={9} onClick={this.toggleViewModal}>
            {note.title}
          </Grid.Column>

          <Grid.Column onClick={this.toggleViewModal} style={dateStyle}>
            {moment(date).calendar()}
          </Grid.Column>

          <Grid.Column>
            <Button.Group floated='right'>

              <DeleteModal
              handleDelete = {this.handleDelete}
              title={'Note'}/>

              <Button
                color='grey'
                icon='edit'
                onClick={this.toggleEditModal}/>

            </Button.Group>
          </Grid.Column>

        </Grid>
      </Segment>

      <ViewNoteModal
        isOpen={ viewModalOpen}
        onClose={this.toggleViewModal}
        title={title}
        content={content}
        date={moment(date).format('H:mm, MMM Do YYYY')}

      />

      <EditNoteModal
      isOpen={editModalOpen}
      onClose={this.toggleEditModal}
      onButtonSaveClick={onButtonSaveClick}
      handleDelete={this.handleDelete}
      title={title}
      content={content}
      date={moment(date).format('H:mm, MMM Do YYYY')}
      />

    </div>
        )
    }
}
