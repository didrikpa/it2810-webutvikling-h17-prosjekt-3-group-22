import React, { Component } from 'react'
import { CheckBox, Button, Icon, Content, Text, ListItem, Item } from 'native-base'
import { Col, Grid, Row } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native'
import moment from 'moment'
import EditTodoModal from "./EditTodoModal"
import DeleteModal from '../DeleteModal'


export default class Todo extends Component {

    constructor(props) {
        super(props)

        //sets the state
        this.state = {
            //Booleans used to open and close modals
            editModalOpen: false,
            deleteModalOpen: false,
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
     * Toggle delete modal on/off
     */
    toggleDeleteModal = () => {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
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
        const { date, editModalOpen, deleteModalOpen } = this.state
        const { todo, onButtonClick, deleteItem } = this.props
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
                                    onPress={this.toggleDeleteModal}
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
                    <DeleteModal
                        isOpen={deleteModalOpen}
                        toggleModal={this.toggleDeleteModal}
                        deleteFunction={deleteItem}
                        object={todo}
                        title={todo.text}
                        headerTitle={"todo"}
                    />
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
