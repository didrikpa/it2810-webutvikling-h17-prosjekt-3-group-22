import React, { Component } from 'react'
import { Container, Divider, List } from 'native-base'
import { AsyncStorage } from 'react-native';
import Todo from './Todo'
import TodoInput from './TodoInput'
import moment from "moment";

export default class TodoContainer extends Component<{}> {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentWillMount = async () => {
        //localStorage.clear()
        console.log("test")
        let localTodos = JSON.parse(await AsyncStorage.getItem('todos'))
        this.setState({
            todos: localTodos || []
        })
    }

    checkBoxClick = (todo) => {
        console.log("im running")
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
            checked: false,
            isStar:false,
        }
        todos.splice(0,0,todo)
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

    updateLocalStorage = async () => {
        const { todos } = this.state
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error(error)
        }
    }


    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    updateToDos = (todo) => {
        const {todos} = this.state;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i] === todo){
                todos.splice(i,1)
                todo.isStar ? todos.push(todo) : todos.splice(0,0,todo)
                this.updateState(todos)
                break
            }
        }
        console.log(todos)
    }


    render() {
        const { todos } = this.state
        return(
                <Container>
                    <TodoInput onButtonClick={this.onButtonClick}/>
                    <List>

                    { todos.map((todo) => <Todo key={todo.date} todo={todo} checkBoxClick={this.checkBoxClick}
                                                deleteItem={this.deleteItem} onButtonClick = {this.onButtonClick}
                                                updateToDos = {this.updateToDos} />) }
                    </List>
                </Container>
        )
    }
}