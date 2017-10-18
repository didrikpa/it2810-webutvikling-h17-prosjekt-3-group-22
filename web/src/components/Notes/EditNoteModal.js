import React, { Component } from 'react'
import { Button, Input, Modal, Grid, Form } from 'semantic-ui-react'

const dateStyle = {
    fontSize: '1rem',
    color: '#999999'
}

export default class EditNoteModal extends Component {
    constructor (props) {
        super(props)

        this.state = {
            tempTitle: this.props.title,
            tempContent: this.props.content,
            title: this.props.title,
            content: this.props.content,
            date: this.props.date,
            titleError: false,
            contentError: false
        }

        this.handleTitleInput = this.handleTitleInput.bind(this)
        this.handleContentInput = this.handleContentInput.bind(this)
    }

  // Monitor tempTitle input
    handleTitleInput (e, {value}) {
        this.setState({
            tempTitle: value
        })
    }

  // Monitor tempContent input
    handleContentInput (e, {value}) {
        this.setState({
            tempContent: value
        })
    }

    /**
     * Handler for save button click.
     * Checks if input fields are empty, if they are, give feedback to user (red input fields)
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
    handleButtonSaveClick = () => {
        const { tempTitle, tempContent } = this.state

        if ((tempTitle.length !== 0) && (tempContent.length !== 0)) {
            const { handleDelete } = this.props
            this.props.onButtonSaveClick(tempTitle, tempContent)
            handleDelete()

            this.setState({
                tempTitle: '',
                tempContent: '',
                title: '',
                content: ''
            })

            this.props.onClose()
        }

        if (tempTitle.length === 0) {
            this.toggleErrorTitleInput()
            setTimeout(this.toggleErrorTitleInput, 3000)
        }
        if (tempContent.length === 0) {
            this.toggleErrorContentInput()
            setTimeout(this.toggleErrorContentInput, 3000)
        }
    }

    /**
     * Toggles title input error value on/off
     */
    toggleErrorTitleInput = () => {
        const { titleError } = this.state
        this.setState({
            titleError: !titleError
        })
    }

    /**
     * Toggles title input error value on/off
     */
    toggleErrorContentInput = () => {
        const { contentError } = this.state
        this.setState({
            contentError: !contentError
        })
    }

    /**
     * Handle for close button click
     * Reset input fields
     * Closes modal
     */
    handleButtonClose = () => {
        const { title, content } = this.state
        this.setState({
            tempTitle: title,
            tempContent: content
        })
        this.props.onClose()
    }

    render () {
        /**
         * Render nothing if model isOpen is false
         */
        const { isOpen } = this.props
        const { tempTitle, tempContent, contentError, titleError, date } = this.state

        if (!this.props.isOpen) {
            return null
        }
        return (
            <Modal
                open={isOpen}
                size='tiny'
                closeOnDimmerClick>
                <Modal.Header>

                    <Grid width={16} >
                        <Grid.Column width={10}>
                            <Input
                                error={titleError}
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
                            <Form.TextArea
                                error={contentError}
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
                            onClick={ this.handleButtonSaveClick }
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
