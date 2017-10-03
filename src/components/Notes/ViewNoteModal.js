import React, { Component } from 'react'
import { Button, Modal, Grid } from 'semantic-ui-react'


export default class ViewNoteModal extends Component{


  handleButtonClose = () => {
    this.props.onClose()
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


  render() {
    const { isOpen, title, content } = this.props

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
              { title }
            </Grid.Column>
            <Grid.Column>
              <Button
                onClick={ this.handleButtonClose }
                color='grey'
              >Close</Button>
            </Grid.Column>
          </Grid>

        </Modal.Header>
        <Modal.Content scrolling>

          <Modal.Description>
            { content }
          </Modal.Description>

        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}