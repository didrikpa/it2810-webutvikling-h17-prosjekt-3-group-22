import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Todo from './Todo'
import TodoInput from './TodoInput'
import Navbar from '../Navbar'
import Footer from "../Footer";
import moment from "moment";

export default class TodoContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentWillMount = () => {
        //localStorage.clear()
        let localTodos = JSON.parse(localStorage.getItem('todos'))
        this.setState({
            todos: localTodos || []
        })
    }

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

    onButtonClick = (text) => {
        const { todos } = this.state
        let todo = {
            text: text,
            date: moment(),
            checked: false
        }
        todos.push(todo)
        this.updateState({
            todos: todos
        })
    }

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

    updateLocalStorage = () => {
        const { todos } = this.state
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    render() {
        const { todos } = this.state
        return(
            <div>
                <Navbar />
                <Container text>
                    <Divider hidden />
                    <TodoInput onButtonClick={this.onButtonClick}/>
                    { todos.map((todo) => <Todo key={todo.date} todo={todo} checkBoxClick={this.checkBoxClick} deleteItem={this.deleteItem} onButtonClick = {this.onButtonClick} />) }
                </Container>
                <Divider hidden />
                <Footer/>
            </div>
        )
    }
} 