import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import moment from 'moment'

export default class TodoInput extends Component {
    constructor (props) {
        super(props)

        /**
         * Set initial state to empty string because this Component only creates new Todos.
         */
        this.state = {
            text: ''
        }
    }

    /**
     * This method handles changes in the text input field and mirrors them into state.
     * @param e The Event that triggered this method.
     * @param value The value of the text input field.
     */
    onChange = (e, {value}) => {
        this.setState({
            text: value
        })
    }

    /**
     * This method handles clicks for creating a new Todo.
     * It does so by fetching the text from state.
     * If the text is not empty, the onButtonClick() method passed from the parent is called.
     * The state of this component is then reset.
     */
    onButtonClick = () => {
        const { text } = this.state
        if (text !== '') {
            this.props.onButtonClick(text)
            this.setState({
                text: '',
                date: moment()

            })
        }
    }

    render () {
        /**
         * Fetch 'text' from state.
         */
        const { text } = this.state

        return (
            <div>
                <Input
                    action
                    fluid
                    placeholder='Write your Todo...'
                    onChange={this.onChange}
                    value={text}>
                    <input />
                    <Button
                        icon='plus'
                        color='green'
                        onClick={this.onButtonClick}
                    />
                </Input>
            </div>
        )
    }
}
