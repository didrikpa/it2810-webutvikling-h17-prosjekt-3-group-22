import React, { Component } from 'react'
import { Segment, CheckBox, Button, Icon, Content, Text, ListItem, Item, Container } from 'native-base'
import { Col, Grid, Row } from 'react-native-easy-grid';
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
        console.log(todo.checked , "this ibe")
        return(
            <ListItem style={{backgroundColor: todo.checked ? "#4BB543" : "white" }}>
                    <Content>
                        <Grid>
                            <Col size={15}>
                                <CheckBox onPress={this.handleCheckBoxClick} checked={todo.checked} />
                            </Col>
                            <Col size={85}>
                                <Row>
                                    <Text style={{fontSize: 21, paddingBottom: 2}}>{ todo.text } </Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text>{ moment(date).calendar()}</Text>
                                    </Col>
                                    <Col>
                                        <Item>
                                            <Button onPress={this.toggleEditModal} success>
                                                <Icon name='create'/>
                                            </Button>
                                            <Button onPress={this.handleDelete} danger>
                                                <Icon name='trash'/>
                                            </Button>
                                            <Button onPress={this.markAsFavorite} warning>
                                                <Icon name={todo.isStar ? 'md-star' : 'star'}/>
                                            </Button>
                                        </Item>
                                    </Col>
                                </Row>
                            </Col>
                          </Grid>
                        <EditTodoModal toggleModal={this.toggleEditModal}
                                       isOpen={editModalOpen}
                                       onButtonSaveClick={onButtonClick}
                                       handleDelete = {this.handleDelete}
                                       content = {todo.text} />
                </Content>
            </ListItem>
        )
    }
}

export default Todo
