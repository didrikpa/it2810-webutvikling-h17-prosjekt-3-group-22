import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

/**
 * DeleteModal is used as a popup to ask if you are sure you want to delete something.
 * It is located outside the sub-apps because it is reusable across all of them, and for any potential new additions.
 */

class DeleteModal extends Component {
    constructor (props) {
        super(props)

        /**
         * Set initial state of the Component to be closed when first created.
         */
        this.state = {
            open: false
        }
    }

    /**
     * This method is used to open the modal.
     */
    handleOpen = () => {
        this.setState({ open: true })
    }

    /**
     * This method is used to close the Modal.
     */
    handleClose = () => {
        this.setState({ open: false })
    }

    render () {
        /**
         * Fetch the 'open' variable from Component state.
         * Fetch the 'handleDelete' method and 'title' variable passed from parent.
         */
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
