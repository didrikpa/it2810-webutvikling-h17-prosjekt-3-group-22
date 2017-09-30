import React, { Component } from 'react'
import { Button, Header, Input, Modal, Grid, Form } from 'semantic-ui-react'


export default class NoteModal extends Component{
  constructor (props){
    super(props)

    this.state = {
      title: '',
      content: '',
      open:false
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)

  }

  //Set open state for Modal
  open = () => this.setState({
    open: true

  })

  //Set close state for Modal
  close = () => this.setState({
    open: false
  })

  //Monitor title input
  onTitleChange(e, {value}) {
    this.setState({
      title: value
    })
  }

  //Monitor content input
  onContentChange(e, {value}) {
    this.setState({
      content: value
    })
  }

  //Save title and content, reset and close Modal
  onButtonClick(){
    const { title, content } = this.state
    this.props.onButtonClick(title, content)
    this.setState({
      title: '',
      content: ''
    })
    this.close()
  }

  render() {
    const { editMode } = this.props
    const { title, content, open } = this.state

    if (editMode === 'new') {
      return (
        <Modal
          open={open}
          size='tiny'
          onOpen={this.open}
          onClose={this.close}
          trigger={<Button icon='plus' positive/>}>
          <Modal.Header>

            <Grid width={16}>
              <Grid.Column width={13}>
                <Input onChange={this.onTitleChange} value={title} placeholder='Title ...'/>
              </Grid.Column>
              <Grid.Column>
                <Button onClick={this.onButtonClick} color='green'>Save</Button>
              </Grid.Column>
            </Grid>

          </Modal.Header>
          <Modal.Content scrolling>

            <Modal.Description>
              <Form.TextArea onChange={this.onContentChange} value={ content } size='small' placeholder='Note text ...' />
            </Modal.Description>

          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      )
    }
    else if (editMode === 'edit'){
      return (
        <Modal
          open={open}
          size='tiny'
          onOpen={this.open}
          onClose={this.close}
          trigger={<Button color='grey'>EDIT</Button>}>
          <Modal.Header>

            <Grid width={16}>
              <Grid.Column width={13}>
                <Input onChange={this.onTitleChange} value={title} placeholder='Title ...'/>
              </Grid.Column>
              <Grid.Column>
                <Button onClick={this.onButtonClick} color='green'>Save</Button>
              </Grid.Column>
            </Grid>

          </Modal.Header>
          <Modal.Content scrolling>

            <Modal.Description>
              <Form.TextArea onChange={this.onContentChange} value={ content } size='small' placeholder='Note text ...' />
            </Modal.Description>

          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      )
    }
  }
}