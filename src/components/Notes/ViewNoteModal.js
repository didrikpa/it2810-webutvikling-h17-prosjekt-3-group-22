import React, { Component } from 'react'
import { Button, Modal, Grid, Form } from 'semantic-ui-react'


export default class ViewNoteModal extends Component{


  handleButtonClose = () => {
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
    const { isOpen, title, content, date } = this.props

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
              { date }
            </Grid.Column>

          </Grid>

        </Modal.Header>
        <Modal.Content scrolling>

          <Modal.Description>
            <Form>
                { content }
            </Form>
          </Modal.Description>

        </Modal.Content>
        <Modal.Actions>
                <Button
                onClick={ this.handleButtonClose }
                color='grey'
              >Close</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
