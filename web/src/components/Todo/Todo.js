import React, { Component } from 'react'
import { Segment, Checkbox, Grid, Button, Icon } from 'semantic-ui-react'
import moment from 'moment'
import EditToDoModal from './EditTodoModal'
import DeleteModal from '../DeleteModal'

class Todo extends Component {
    constructor (props) {
        super(props)

        // init state
        this.state = {
            editModalOpen: false,
            date: this.props.todo.date
        }
    }

    // Handles the checkbox
    handleCheckBoxClick = () => {
        const { todo, checkBoxClick } = this.props
        checkBoxClick(todo)
    }

    // Removes this todo
    handleDelete = () => {
        const { todo, deleteItem } = this.props
        deleteItem(todo)
    }

    // opens and close the editmodal by setting editModalOpen
    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }

    // Adds this todo to favorites
    markAsFavorite = () => {
        let { todo } = this.props
        todo.isStar = !todo.isStar
        this.props.updateToDos(todo)
    }

    render () {
        // define constants
        const { date, editModalOpen } = this.state
        const { todo, onButtonClick } = this.props

        return (
            <div>
                <Segment
                    color={todo.checked ? 'green' : undefined}
                    inverted={todo.checked}>
                    <Grid verticalAlign="middle">
                        <Grid.Column width={1}>
                            <Icon
                                name={todo.isStar ? 'star' : 'empty star'}
                                color='yellow'
                                onClick={this.markAsFavorite}/>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            { todo.text }
                        </Grid.Column>
                        <Grid.Column
                            width={4}
                            onClick={this.toggleViewModal}>
                            { moment(date).calendar()}
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Checkbox
                                onClick={this.handleCheckBoxClick}
                                defaultChecked={todo.checked} />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button.Group>
                                <Button
                                    icon="edit"
                                    onClick={this.toggleEditModal}/>
                                <DeleteModal
                                    handleDelete={this.handleDelete}
                                    title={'Todo'} />
                            </Button.Group>
                        </Grid.Column>

                    </Grid>
                </Segment>

                <EditToDoModal
                    isOpen={editModalOpen}
                    onClose={this.toggleEditModal}
                    onButtonSaveClick = {onButtonClick}
                    handleDelete = {this.handleDelete}
                    date={moment(date).format('H:mm A, MMM Do YYYY')}
                    content={todo.text}
                />
            </div>
        )
    }
}

export default Todo
