import React, { Component } from 'react'
import { Button, Modal, Grid, Form, TextArea } from 'semantic-ui-react'

/**
 * Define CSS locally for this Component.
 */
const dateStyle = {
    fontSize: '1rem',
    color: '#999999'
}

export default class EditToDoModal extends Component {
    constructor (props) {
        super(props)

        /**
         * Initialize default state.
         * State is set to correspont with the Todo object passed from the parent.
         */
        this.state = {
            tempContent: props.content,
            content: props.content,
            date: props.date
        }
    }

    /**
     * This method handles input from the Content field.
     * Changes in the Content Field are mirrored directly to state.
     * @param e The event that triggered this method.
     * @param value The value from the Conent field.
     */
    handleContentInput = (e, {value}) => {
        this.setState({
            tempContent: value
        })
    }

    /**
     * This method handles the saving of an edited Todo.
     * First it fetches the new Todo content from state.
     * If the content is not empty, the onButtonSaveClick() method passed from the parent is called.
     * Then the State of this Component is reset.
     * This Modal is then Closed and the old version of the Todo object is deleted.
     */
    handleButtonSaveClick = () => {
        const { tempContent } = this.state
        if (tempContent !== '') {
            this.props.onButtonSaveClick(tempContent)
            this.setState({
                tempContent: '',
                text: ''
            })
            this.props.onClose()
            this.props.handleDelete()
        }
    }

    /**
     * Closes the window, no change.
     */
    handleButtonClose = () => {
        const { content } = this.state
        this.setState({
            tempContent: content
        })
        this.props.onClose()
    }

    render () {
        /**
         * Fetch 'isOpen' from props passed from parent.
         * Fatch 'tempContent' and 'date' from state.
         */
        const { isOpen } = this.props
        const { tempContent, date } = this.state

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
