import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class DeleteModal extends Component {
  constructor(props) {
      super(props)

      this.state = {
          open: false
      }
  }

  handleOpen = () => {
      this.setState({
          open: true
      }, () => {
          console.log('open')
      })
  }

  handleClose = () => {
      this.setState({
          open: false
      }, () => {
        console.log('closed')
    } )
  }

  render() {
    const { open } = this.state
    const { handleDelete, title } = this.props
    return (
            <Modal onClose={this.handleClose} closeOnDimmerClick size='tiny' open={open} trigger={
              <Button negative icon="delete" onClick={this.handleOpen} floated='right'/>
            }>
                <Modal.Header>
                    Delete Your { title }
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your { title }?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative icon='x' labelPosition='left' content='Delete' onClick={handleDelete}/>
                    <Button content='No' onClick={this.handleClose}/>
                </Modal.Actions>
            </Modal>
    )
  }
}

export default DeleteModal
