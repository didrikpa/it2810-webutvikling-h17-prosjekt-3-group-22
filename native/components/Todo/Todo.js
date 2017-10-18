import React, { Component } from 'react'
import { Segment, CheckBox, Button, Icon, Content, Text, ListItem,
  Item, Container } from 'native-base'
import { Col, Grid, Row } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native'
import moment from 'moment'
import EditTodoModal from "./EditTodoModal"



export default class Todo extends Component {

    constructor(props) {
        super(props)

        //sets the state
        this.state = {
            //Boolean used to open and close modal
            editModalOpen: false,
            //Sets the date to props date
            date: this.props.todo.date,
        }
    }

    /**
     * Handels checkbox click
     */
    handleCheckBoxClick = () => {
        const { todo, checkBoxClick } = this.props
        checkBoxClick(todo)
    }

    /**
     * Handles delete button, removes this item
     */
    handleDelete = () => {
        const { todo, deleteItem } = this.props
        deleteItem(todo)
    }


    /**
     * Toggele the modal window
     */
    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }


    /**
     * Sets this todo as a favorite
     */
    markAsFavorite = () => {
        let { todo } = this.props
        todo.isStar = !todo.isStar
        this.props.updateToDos(todo)
    }


    render() {
        //defines constants
        const { date, editModalOpen} = this.state
        const { todo, onButtonClick} = this.props
        return(
            <ListItem style={{backgroundColor: todo.checked ? "#4BB543" : "white" }}>
                    <Content>
                        <Grid>
                            <Col size={29}>
                                <Row>
                                    <CheckBox
                                        onPress={this.handleCheckBoxClick}
                                        style={styles.todoStyle}
                                        checked={todo.checked} />
                                    <Icon
                                        name={todo.isStar ? 'md-star' : 'star'}
                                        style={styles.starStyle}
                                        onPress={this.markAsFavorite}/>
                                </Row>
                            </Col>
                            <Col size={76} style={{marginRight: 10}}>
                                <Row>
                                    <Text
                                        style={{fontSize: 21, paddingBottom: 2}}>
                                        { todo.text }
                                    </Text>
                                </Row>
                                <Row>
                                    <Text>
                                        { moment(date).calendar()}
                                    </Text>
                                </Row>
                            </Col>
                            <Col size={39}>
                                <Item>
                                    <Button
                                        onPress={this.handleDelete}
                                        style={{
                                            backgroundColor:"#db2828",
                                            paddingRight:4}}>
                                        <Icon
                                            name='close'
                                            style={{color:'white'}}
                                        />
                                    </Button>
                                    <Button
                                        onPress={this.toggleEditModal}
                                        style={{
                                            backgroundColor:'#767676',
                                            marginLeft:-1}}>
                                        <Icon
                                            name='create'
                                            style={{color:'white'}}/>
                                    </Button>
                                </Item>
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

const styles = StyleSheet.create({

    todoStyle: {
        justifyContent : 'center',
        alignItems: 'center',
        marginTop: 20
    },

    starStyle: {
        color:'yellow',
        marginLeft: 18,
        marginTop: 15
    }

})
