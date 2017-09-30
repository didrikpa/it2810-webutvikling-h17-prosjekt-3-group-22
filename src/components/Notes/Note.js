import React, { Component } from 'react'

import { Segment, Grid, Button } from 'semantic-ui-react'

import NoteModal from './NoteModal'

export default class Note extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  handleDeleteClick = () => {
    const { note, deleteItem } = this.props
    deleteItem(note)
  }



  render() {
    const { note } = this.props
    const date = '01.01.2000'
    return (
      <div>
        <Segment>
          <Grid columns='equal' floated='left' width={16}>
            <Grid.Column width={9}>
              { note.title }
            </Grid.Column>
            <Grid.Column>
              { date }
            </Grid.Column>
            <Grid.Column>
              <Button.Group floated='right'>
                <Button onClick={this.handleDeleteClick} negative icon='delete'/>
                <Button color='grey' icon='edit' />
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}
