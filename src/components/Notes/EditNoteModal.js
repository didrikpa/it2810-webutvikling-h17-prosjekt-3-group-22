import React, { Component } from 'react'
import { Button, Input, Modal, Grid, Form, TextArea } from 'semantic-ui-react'

const dateStyle = {
  fontSize: "1rem",
  color: "#999999"
}

export default class NewNoteModal extends Component{
  constructor (props){
    super(props)

    this.state = {
      tempTitle: this.props.title,
      tempContent: this.props.content,
      title: this.props.title,
      content: this.props.content,
      date: this.props.date
    }

    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleContentInput = this.handleContentInput.bind(this)

  }

  //Monitor tempTitle input
  handleTitleInput(e, {value}) {
    this.setState({
      tempTitle: value
    })
  }

  //Monitor tempContent input
  handleContentInput(e, {value}) {
    this.setState({
      tempContent: value
    })
  }

  handleButtonSaveClick = () => {
    const { tempTitle, tempContent } = this.state
    this.props.onButtonSaveClick(tempTitle, tempContent)
    this.setState({
      tempTitle: '',
      tempContent: '',
      title: '',
      content: ''
    })

    this.props.onClose()

  }

  handleButtonEditClick = () => {
    const { handleDelete } = this.props
    handleDelete()
    this.handleButtonSaveClick()
  }

  handleButtonClose = () => {
    const { title, content } = this.state
    this.setState({
      tempTitle: title,
      tempContent: content
    })
    this.props.onClose()
  }


  render() {
    const { isOpen } = this.props
    const { tempTitle, tempContent, date } = this.state

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
              <Input
                onChange={ this.handleTitleInput }
                value={ tempTitle }
                placeholder='Title ...'/>
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
              placeholder='Note text ...'
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