import React, { Component } from 'react'
import { Segment,Button, Checkbox, Grid } from 'semantic-ui-react'

export default class Note extends Component{
  constructor(props){
    super(props)
  }

  handleDelete = () => {
    const { note, deleteItem } = this.props
    deleteItem(note)
  }

  render(){
    const { note, onButtonSaveClick } = this.props
    const date = '01.01.2001'

    return (

    <div>
      <Segment>
        <Grid
          columns='equal'
          floated='left'
          width={16}>

          <Grid.Column width={9}>
            {note.title}
          </Grid.Column>

          <Grid.Column>
            {date}
          </Grid.Column>

          <Grid.Column>
            <Button.Group floated='right'>

              <Button
                icon='delete'
                negative
              onClick={this.handleDelete}/>

              <Button color='grey' icon='edit'/>

            </Button.Group>
          </Grid.Column>

        </Grid>
      </Segment>
    </div>
    )}
}
