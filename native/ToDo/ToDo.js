import React, { Component } from 'react'
import { Segment, CheckBox, Button, Icon, Content, Text, ListItem } from 'native-base'
import { Col, Grid } from 'react-native-easy-grid';
import moment from 'moment'
import EditTodoModal from "./EditTodoModal"


class Todo extends Component<{}> {
    constructor(props) {
        super(props)

        this.state = {
            editModalOpen: false,
            date: this.props.todo.date,
        }
    }

    handleCheckBoxClick = () => {
        const { todo, checkBoxClick } = this.props
        checkBoxClick(todo)
    }

    handleDelete = () => {
        const { todo, deleteItem } = this.props
        deleteItem(todo)
    }


    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }
    markAsFavorite = () => {
        let { todo } = this.props
        todo.isStar = !todo.isStar
        this.props.updateToDos(todo)
    }




    render() {
        const { date, editModalOpen} = this.state
        const { todo, onButtonClick} = this.props
        return(
            <ListItem>
                    <Content>
                        <Grid>
                            <Col style={{height: 50}}>
                                <Text> { todo.text } </Text>
                            </Col>
                            <Col style={{height: 50}}>
                                <Text>{ moment(date).calendar()}</Text>
                            </Col>
                            <Col style={{height: 100}}>
                                <CheckBox onValueChange={this.handleCheckBoxClick} Checked={todo.checked} />
                            </Col>
                            <Col style={{height: 50}}>
                                <EditTodoModal />
                            </Col>
                        </Grid>
                </Content>
            </ListItem>
        )
    }
}

export default Todo
