import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import moment from 'moment'

export default class TodoInput extends Component {
    constructor (props) {
        super(props)

        // init state
        this.state = {
            text: ''
        }
    }

    // Updates on change in the textfield
    onChange = (e, {value}) => {
        this.setState({
            text: value
        })
    }

    // Saves the new text in todo
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
        // define constants
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
                        onClick={this.onButtonClick}/>
                </Input>
            </div>
        )
    }
}
