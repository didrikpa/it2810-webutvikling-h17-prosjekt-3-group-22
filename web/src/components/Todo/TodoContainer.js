import React, { Component } from 'react'
import { Container, Divider, Header, Grid } from 'semantic-ui-react'
import moment from 'moment'

import Todo from './Todo'
import TodoInput from './TodoInput'

export default class TodoContainer extends Component {
    constructor (props) {
        super(props)

        // init state
        this.state = {
            todos: []
        }
    }

    // loads todo from localStorage
    componentWillMount = () => {
        // localStorage.clear()
        let localTodos = JSON.parse(localStorage.getItem('todos'))
        this.setState({
            todos: localTodos || []
        })
    }

    // handles checkbox click
    checkBoxClick = (todo) => {
        const { todos } = this.state
        const i = todos.indexOf(todo)
        if (i >= 0) {
            todos[i].checked = !todos[i].checked
            this.updateState({
                todos: todos
            })
        } else {
            console.error(`[TodoContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    // Creates new todo and adds it to array
    newTodo = (text) => {
        const { todos } = this.state
        let todo = {
            text: text,
            date: moment(),
            checked: false,
            isStar: false
        }
        todos.splice(0, 0, todo)
        this.updateState({
            todos: todos
        })
    }

    // removes todo
    deleteItem = (todo) => {
        let { todos } = this.state
        const i = todos.indexOf(todo)
        if (i >= 0) {
            todos.splice(i, 1)
            this.updateState({
                todos: todos
            })
        } else {
            console.error(`[TodoContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    // updates localstorage
    updateLocalStorage = () => {
        const { todos } = this.state
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    // Updates state
    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    // Updates the order of the todos
    updateToDos = (todo) => {
        const {todos} = this.state
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === todo) {
                todos.splice(i, 1)
                todo.isStar ? todos.splice(0, 0, todo) : todos.push(todo)
                this.updateState(todos)
                break
            }
        }
    }

    render () {
        // define constants
        const { todos } = this.state
        return (
            <div>
                <Divider hidden />
                <Container text>
                    <Grid.Column>
                        <Grid.Row width={10}>
                            <Header as='h1' floated='left'>Your todos</Header>
                            <TodoInput onButtonClick={this.newTodo}/>
                        </Grid.Row>
                    </Grid.Column>
                    <Divider hidden/>
                    { todos.map((todo) =>
                        < Todo key={todo.date}
                        todo={todo}
                        checkBoxClick={this.checkBoxClick}
                        deleteItem={this.deleteItem}
                        onButtonClick = {this.newTodo}
                        updateToDos = {this.updateToDos} />) }

                    { todos.length ?
                        undefined :
                        <Header as='h3' block textAlign='center'>
                            You have no todos
                        </Header>
                    }

                </Container>
                <Divider hidden />
            </div>
        )
    }
}
