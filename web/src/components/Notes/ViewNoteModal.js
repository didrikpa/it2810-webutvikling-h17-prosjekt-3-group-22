import React, { Component } from 'react'
import { Button, Modal, Grid, Form } from 'semantic-ui-react'

const dateStyle = {
    fontSize: '1rem',
    color: '#999999'
}

export default class ViewNoteModal extends Component {
    handleButtonClose = () => {
        this.props.onClose()
    }

    /**
    * Save title and content, reset and close Modal
    */
    onButtonClick () {
        const { title, content } = this.state
        this.props.onButtonClick(title, content)

        this.setState({
            title: '',
            content: ''
        })
        this.props.onClose()
    }

    render () {
      /**
       * Render nothing if model isOpen is false
       */
        const { isOpen, title, content, date } = this.props

        if (!this.props.isOpen) {
            return null
        }
        return (
            <Modal
                open={isOpen}
                size='tiny'>
                <Modal.Header>

                    <Grid width={16}>
                        <Grid.Column width={10}>
                            { title }
                            </Grid.Column>
                        <Grid.Column width={6} textAlign='right' style={dateStyle}>
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
                        color='grey'>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
