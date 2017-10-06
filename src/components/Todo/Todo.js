import React, { Component } from 'react'
import { Segment, Checkbox, Grid, Divider } from 'semantic-ui-react'

import DeleteModal from '../DeleteModal'

class Todo extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {

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
        const { todo } = this.props
        return(
          <div>
            <Segment color={todo.checked ? 'green' : undefined} inverted={todo.checked} >
                <Grid
                  verticalAlign="middle"
                  width={16}>
                    <Grid.Column width={13}>
                        { todo.text }
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Checkbox onClick={this.handleCheckBoxClick} defaultChecked={todo.checked} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <DeleteModal handleDelete={this.handleDelete} title={"Todo"}/>
                    </Grid.Column>
                </Grid>
            </Segment>
          </div>
        )
    }
}

export default Todo