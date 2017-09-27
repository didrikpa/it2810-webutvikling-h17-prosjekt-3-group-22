import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import Todo from './Todo'
import TodoInput from './TodoInput'

export default class TodoContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {text: 'Oppgave i morgen..', checked: false, date: '01-01-1970'}
            ]
        }

        this.checkBoxClick = this.checkBoxClick.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    checkBoxClick() {

    }

    onButtonClick(text) {
        const { todos } = this.state
        let todo = {
            text: text,
            date: new Date(),
            checked: false
        }
        todos.push(todo)
        this.setState({
            todos: todos
        })
    }

    render() {
        const { todos } = this.state
        return(
            <Container text>
                <TodoInput onButtonClick={this.onButtonClick}/>
                { todos.map((todo) => <Todo todo={todo} />) }
            </Container>
        )
    }
} 