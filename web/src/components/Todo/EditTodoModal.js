import React, { Component } from 'react'
import { Button, Modal, Grid, Form, TextArea } from 'semantic-ui-react'

// Define style for grid
const dateStyle = {
    fontSize: '1rem',
    color: '#999999'
}

export default class EditToDoModal extends Component {
    constructor (props) {
        super(props)

        // Init state
        this.state = {
            tempContent: this.props.content,
            content: this.props.content,
            date: this.props.date
        }
    }

    // Monitor tempContent input
    handleContentInput = (e, {value}) => {
        this.setState({
            tempContent: value
        })
    }

    // Saves the changes made, on save button click
    handleButtonSaveClick = () => {
        const { tempContent } = this.state
        if (tempContent !== '') {
            this.props.onButtonSaveClick(tempContent)
            this.setState({
                tempContent: '',
                text: ''
            })

            // Close the window
            this.props.onClose()
            // delete old todo
            this.props.handleDelete()
        }
    }

    // closes the window, no change
    handleButtonClose = () => {
        const { content } = this.state
        this.setState({
            tempContent: content
        })
        this.props.onClose()
    }

    render () {
        // define constants
        const { isOpen } = this.props
        const { tempContent, date } = this.state

        // checks if the window is open or not
        if (!this.props.isOpen) {
            return null
        }
        return (
            <Modal
                open={isOpen}
                size='tiny'>
                <Modal.Header>
                    <Grid width={16} >
                        <Grid.Column width={10}>
                            Edit your todo:
                        </Grid.Column>
                        <Grid.Column
                            width={6}
                            textAlign="right"
                            verticalAlign="middle"
                            style={dateStyle}>
                            { date }
                        </Grid.Column>
                    </Grid>
                </Modal.Header>
                <Modal.Content scrolling>

                    <Modal.Description>
                        <Form>
                          <TextArea
                              onChange={ this.handleContentInput }
                              value={ tempContent } size='small'
                              placeholder='ToDo text ...'
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
