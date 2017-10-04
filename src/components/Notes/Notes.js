import React, { Component } from 'react'
import { Segment,Button, Grid } from 'semantic-ui-react'

import ViewNoteModal from './ViewNoteModal'
import EditNoteModal from './EditNoteModal'



export default class Note extends Component{
  constructor(props){
    super(props)


    this.state = {
      viewModalOpen: false,
      editModalOpen: false,
      title: this.props.note.title,
      content: this.props.note.content
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


  render(){
    const { note, onButtonSaveClick } = this.props
    const { viewModalOpen, title, content, editModalOpen } = this.state
    const date = '01.01.2001'

    return (

    <div>
      <Segment>
        <Grid
          columns='equal'
          floated='left'
          width={16}>

          <Grid.Column width={9} onClick={this.toggleViewModal}>
            {note.title}
          </Grid.Column>

          <Grid.Column onClick={this.toggleViewModal}>
            {date}
          </Grid.Column>

          <Grid.Column>
            <Button.Group floated='right'>

              <Button
                icon='delete'
                negative
              onClick={this.handleDelete}/>

              <Button
                color='grey'
                icon='edit'
                onClick={this.toggleEditModal}/>

            </Button.Group>
          </Grid.Column>

        </Grid>
      </Segment>

      <ViewNoteModal
        isOpen={viewModalOpen}
        onClose={this.toggleViewModal}
        title={title}
        content={content}
        />

      <EditNoteModal
      isOpen={editModalOpen}
      onClose={this.toggleEditModal}
      onButtonSaveClick={onButtonSaveClick}
      handleDelete={this.handleDelete}
      title={title}
      content={content}/>

    </div>
    )}
}