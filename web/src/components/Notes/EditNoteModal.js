import React, { Component } from 'react'
import { Button, Input, Modal, Grid, Form } from 'semantic-ui-react'

/**
 * Define local CSS for this Component.
 */
const dateStyle = {
    fontSize: '1rem',
    color: '#999999'
}

export default class EditNoteModal extends Component {
    constructor (props) {
        super(props)

        /**
         * Set initial state of this Edit Modal to refer to the Note passed from the parent.
         */
        this.state = {
            tempTitle: props.title,
            tempContent: props.content,
            title: props.title,
            content: props.content,
            date: props.date,
            titleError: false,
            contentError: false
        }
    }

    /**
     * This method handles changes in the Title field and mirror them to state.
     * @param e The event cwhcih triggered this method.
     * @param value The value of the Title field.
     */
    handleTitleInput = (e, {value}) => {
        this.setState({
            tempTitle: value
        })
    }

    /**
     * This method handles changes in the Content field and mirror them to state.
     * @param e The event cwhcih triggered this method.
     * @param value The value of the Content field.
     */
    handleContentInput = (e, {value}) => {
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

        if ((tempTitle.length !== 0) && (!tempContent.length !== 0)) {
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
         * Fetch 'isOpen' from props passed from parent.
         * Fetch 'tempTitle', 'tempConent', 'contentError', 'titleError' and 'date' from state.
         */
        const { isOpen } = this.props
        const { tempTitle, tempContent, contentError, titleError, date } = this.state

        /**
         * Render nothing if model isOpen is false.
         */
        if (!this.props.isOpen) {
            return null
        }
        return (
            <Modal
                open={isOpen}
                size='tiny'
                closeOnDimmerClick
            >
                <Modal.Header>
                    <Grid width={16} >
                        <Grid.Column width={10}>
                            <Input
                                error={titleError}
                                onChange={ this.handleTitleInput }
                                value={ tempTitle }
                                placeholder='Title ...'
                            />
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
                                autoHeight={true}
                            />
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
                            color='grey'
                        >
                            Close
                        </Button>
                    </Button.Group>
                </Modal.Actions>
            </Modal>
        )
    }
}
