import React, { Component } from 'react'
import { Button, Input, Modal, Grid, Form, TextArea } from 'semantic-ui-react'


export default class NewNoteModal extends Component{
  constructor (props){
    super(props)

    this.state = {
      title: this.props.title,
      content: this.props.content,
    }

    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleContentInput = this.handleContentInput.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)

  }

  //Monitor title input
  handleTitleInput(e, {value}) {
    this.setState({
      title: value
    })
  }

  //Monitor content input
  handleContentInput(e, {value}) {
    this.setState({
      content: value
    })
  }

  handleButtonSaveClick = () => {
    const { title, content } = this.state
    this.props.onButtonSaveClick(title, content)
    this.setState({
      title: '',
      content: ''
    })

    this.props.onClose()

  }

  //Save title and content, reset and close Modal
  onButtonClick(){
    const { title, content } = this.state
    this.props.onButtonClick(title, content)

    //Render nothing if model isOpen is false
    this.setState({
      title: '',
      content: ''
    })
    this.props.onClose()
  }

  handleButtonClose = () => {
    this.setState({
      title: '',
      content: ''
    })
    this.props.onClose()
  }


  render() {
    const { isOpen } = this.props
    const { title, content } = this.state

    if(!this.props.isOpen) {
      return null;
    }
    return (
      <Modal
        open={isOpen}
        size='tiny'>
        <Modal.Header>

          <Grid width={16}>
            <Grid.Column width={13}>
              <Input
                onChange={ this.handleTitleInput }
                value={ title }
                placeholder='Title ...'/>
            </Grid.Column>

          </Grid>

        </Modal.Header>
        <Modal.Content scrolling>

          <Modal.Description>
            <Form>
            <TextArea
              onChange={ this.handleContentInput }
              value={ content } size='small'
              placeholder='Note text ...'
              autoHeight={true}/>
            </Form>
          </Modal.Description>

        </Modal.Content>
        <Modal.Actions>
          <Button.Group>
          <Button
            onClick={ this.handleButtonSaveClick }
            color='green'>
            Save
          </Button>
          <Button
            onClick={this.handleButtonClose}
            color='grey'>Close
          </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    )
  }
}