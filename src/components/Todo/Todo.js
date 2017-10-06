import React, { Component } from 'react'
import { Segment, Checkbox, Grid, Icon } from 'semantic-ui-react'
import moment from 'moment'

import DeleteModal from './DeleteModal'


class Todo extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {
            date: this.props.todo.date

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

    render() {
        const { date } = this.state
        const { todo, checkBoxClick } = this.props
        return(
            <Segment color={todo.checked ? 'green' : undefined} inverted={todo.checked}>
                <Grid>
                    <Grid.Column width={10}>
                        { todo.text }
                    </Grid.Column>
                    <Grid.Column width={4} onClick={this.toggleViewModal}>

                        { moment(date).calendar()}
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Checkbox onClick={this.handleCheckBoxClick} defaultChecked={todo.checked} />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <DeleteModal handleDelete={this.handleDelete} />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default Todo