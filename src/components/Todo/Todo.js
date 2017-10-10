import React, { Component } from 'react'
import { Segment, Checkbox, Grid, Button } from 'semantic-ui-react'
import moment from 'moment'
import EditToDoModal from "./EditTodoModal"

import DeleteModal from '../DeleteModal'


class Todo extends Component {
    constructor(props) {
        super(props)

        console.log(props)

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


    render() {
        const { date, editModalOpen, viewModalOpen} = this.state
        const { todo, checkBoxClick, onButtonClick} = this.props
        return(
            <div>
                <Segment color={todo.checked ? 'green' : undefined} inverted={todo.checked}>
                    <Grid>
                        <Grid.Column width={8}>
                            { todo.text }
                        </Grid.Column>
                        <Grid.Column width={4} onClick={this.toggleViewModal}>
                            { moment(date).calendar()}
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Checkbox onClick={this.handleCheckBoxClick} defaultChecked={todo.checked} />
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Button.Group>
                                <DeleteModal handleDelete={this.handleDelete} />
                                <Button icon="edit" color="grey" onClick={this.toggleEditModal}/>
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
