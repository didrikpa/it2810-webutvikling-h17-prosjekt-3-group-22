import React, { Component } from 'react'
import { Content, Divider, List } from 'native-base'
import { AsyncStorage } from 'react-native';
import Todo from './Todo'
import TodoInput from './TodoInput'
import moment from "moment";

export default class TodoContainer extends Component<{}> {
    constructor(props) {
        super(props)

        //Sets the state
        this.state = {
            todos: []
        }
    }

    //Loads content from localStorage
    componentWillMount = async () => {
        let localTodos = JSON.parse(await AsyncStorage.getItem('todos'))
        this.setState({
            todos: localTodos || []
        })
    }

    //Handles the checkbox button in todo
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

    //Adds a new todo to the list, and updates localStorage
    newTodo = (text) => {
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

    //Removes given todo
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

    //Updates localStorage
    updateLocalStorage = async () => {
        const { todos } = this.state
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error(error)
        }
    }

    //Updates state
    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    //Updates the todo list for a given todo
    updateToDos = (todo) => {
        const {todos} = this.state;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i] === todo){
                todos.splice(i,1)
                todo.isStar ? todos.splice(0,0,todo) :  todos.push(todo)
                this.updateState(todos)
                break
            }
        }
    }

    render() {
        //define constants
        const { todos } = this.state
        return(
                <Content>
                    <TodoInput onButtonClick={this.newTodo}/>
                    <List>
                    { todos.map((todo) => <Todo key={todo.date} todo={todo} checkBoxClick={this.checkBoxClick}
                                                deleteItem={this.deleteItem} onButtonClick = {this.newTodo}
                                                updateToDos = {this.updateToDos} />) }
                    </List>
                </Content>
        )
    }
}