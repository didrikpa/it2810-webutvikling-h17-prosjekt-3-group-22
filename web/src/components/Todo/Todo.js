import React, { Component } from 'react'
import { Segment, Checkbox, Grid, Button, Icon } from 'semantic-ui-react'
import moment from 'moment'

import EditTodoModal from './EditTodoModal'
import DeleteModal from '../DeleteModal'

class Todo extends Component {
    constructor (props) {
        super(props)

        /**
         * Set the  initial state of this Component
         */
        this.state = {
            editModalOpen: false,
            date: props.todo.date
        }
    }

    /**
     * Handle Todos checkbox click and notify parent Component of the change.
     */
    handleCheckBoxClick = () => {
        const { todo, checkBoxClick } = this.props
        checkBoxClick(todo)
    }

    /**
     * Handle deletion of this Todo.
     * Notify parent Component to delete the Todo this Component represents.
     */
    handleDelete = () => {
        const { todo, deleteItem } = this.props
        deleteItem(todo)
    }

    /**
     * Toggle state of this Modal to set open of closed.
     */
    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }

    /**
     * Toggle starred boolean of the Todo this Component represents.
     * Call parents updateTodos() method to toggle in state.
     */
    markAsFavorite = () => {
        let { todo, updateTodos } = this.props
        todo.isStar = !todo.isStar
        updateTodos(todo)
    }

    render () {
        /**
         * Fetch 'date' and 'editModalOpen' from state.
         * Fetch 'todo' and 'onButtonClick' from props passed from parent.
         */
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
                                    onClick={this.toggleEditModal}
                                    color='grey'/>
                                <DeleteModal
                                    handleDelete={this.handleDelete}
                                    title={'Todo'} />
                            </Button.Group>
                        </Grid.Column>

                    </Grid>
                </Segment>

                <EditTodoModal
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
