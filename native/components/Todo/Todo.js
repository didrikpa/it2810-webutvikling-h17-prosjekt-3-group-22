import React, { Component } from 'react'
import { Segment, CheckBox, Button, Icon, Content, Text, ListItem, Item, Container } from 'native-base'
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
   * Toggle the modal window
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
            <ListItem style={{backgroundColor: todo.checked ? "#4BB543" : "white" }}><Content>
                        <Grid>
                            <Col size={15}>
                                <CheckBox onPress={this.handleCheckBoxClick} checked={todo.checked} />
                            </Col>
                            <Col size={85}>
                                <Row>
                                    <Text style={{fontSize: 21, paddingBottom: 2}}>{ todo.text } </Text>
                                </Row>
                                <Row>
                                    <Col size={45}>
                                        <Text style={styles.dateStyle}>{ moment(date).calendar()}</Text>
                                    </Col>
                                    <Col size={55}>
                                        <Item>
                                            <Button
                                                onPress={this.toggleDeleteModal}
                                                style={{backgroundColor:"#db2828", paddingRight:4}}>
                                                <Icon
                                                    name='close'
                                                    style={{color:'white'}}
                                                />
                                            </Button>
                                            <Button
                                                onPress={this.toggleEditModal}
                                                style={{backgroundColor:'#767676',marginLeft:-1}}>
                                                <Icon name='create' style={{color:'white'}}/>
                                            </Button>
                                            <Button onPress={this.markAsFavorite} warning>
                                                <Icon name={todo.isStar ? 'md-star' : 'star'}/>
                                            </Button>
                                        </Item>
                                    </Col>
                                </Row>
                            </Col>
                          </Grid>
                        <EditTodoModal
                            toggleModal={this.toggleEditModal}
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
/**
 * Css styling for title and date
 */
const styles = StyleSheet.create({

    dateStyle: {
        color:'#999999'
    }

})