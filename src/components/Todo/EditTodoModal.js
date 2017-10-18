import React, { Component } from 'react'
import { Button, Input, Modal, Grid, Form, TextArea } from 'semantic-ui-react'

const dateStyle = {
  fontSize: "1rem",
  color: "#999999"
}

export default class EditToDoModal extends Component{
  constructor (props){
    super(props)

    this.state = {
      tempContent: this.props.content,
      content: this.props.content,
      date: this.props.date
    }


    this.handleContentInput = this.handleContentInput.bind(this)

  }

  //Monitor tempContent input
  handleContentInput(e, {value}) {
    this.setState({
      tempContent: value
    })
  }

  handleButtonSaveClick = () => {
    const { tempContent } = this.state
      if(tempContent !== "") {
          this.props.onButtonSaveClick(tempContent)
          this.setState({
              tempContent: '',
              text: ''
          })

          this.props.onClose()
      }
  }

  handleButtonEditClick = () => {
        const { handleDelete } = this.props
        handleDelete()
        this.handleButtonSaveClick()
    }


  handleButtonClose = () => {
    const { content } = this.state
    this.setState({
      tempContent: content
    })
    this.props.onClose()
  }


  render() {
    const { isOpen } = this.props
    const {  tempContent, date } = this.state

    if(!this.props.isOpen) {
      return null;
    }
    return (
      <Modal
        open={isOpen}
        size='tiny'>
        <Modal.Header>
            <Grid width={16} >
              <Grid.Column width={10}>
                Edit your todo:
              </Grid.Column>
              <Grid.Column width={6} textAlign="right" verticalAlign="middle" style={dateStyle}>
                  { date }
              </Grid.Column>
          </Grid>
        </Modal.Header>
        <Modal.Content scrolling>

          <Modal.Description>
            <Form>
            <TextArea
              onChange={ this.handleContentInput }
              value={ tempContent } size='small'
              placeholder='ToDo text ...'
              autoHeight={true}/>
            </Form>
          </Modal.Description>

        </Modal.Content>
        <Modal.Actions>
          <Button.Group>
          <Button
            onClick={ this.handleButtonEditClick }
            color='green'>
            Save
          </Button>
          <Button
            onClick={this.handleButtonClose}
            color='grey'>
            Close
          </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    )
  }
}