import React, { Component } from 'react'
import { Segment, Checkbox } from 'semantic-ui-react'

class Todo extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {

        }
    }

    render() {
        const { todo, checkBoxClick } = this.props
        return(
            <Segment>
                { todo.text }
                <Checkbox onClick={checkBoxClick} defaultChecked={todo.checked}/>
            </Segment>
        )
    }
}

export default Todo