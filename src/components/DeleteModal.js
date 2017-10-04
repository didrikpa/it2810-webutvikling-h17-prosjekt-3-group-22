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
    const { handleDelete } = this.props
    return (
        <div>
            <Modal onClose={this.handleClose} closeOnDimmerClick size='tiny' open={open} trigger={
                <Icon size='large' color='red' name='delete' onClick={this.handleOpen}/>
            }>
                <Modal.Header>
                    Delete your Todo
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your Todo?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative icon='x' labelPosition='left' content='Delete' onClick={handleDelete}/>
                    <Button content='No' onClick={this.handleClose}/>
                </Modal.Actions>
            </Modal>
        </div>
    )
  }
}

export default DeleteModal
