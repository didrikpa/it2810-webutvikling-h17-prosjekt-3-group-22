import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class Event extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        const { event } = this.props
        return(
            <div>
                <Segment attached>
                    { event.text }
                </Segment>
            </div>
        )
    }
}
