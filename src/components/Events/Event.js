import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'

import DeleteModal from '../DeleteModal'

export default class Event extends Component {
    constructor(props) {
        super(props)
    }

    handleDelete = () => {
        const { event, deleteItem } = this.props
        deleteItem(event)
    }

    render() {
        const { event } = this.props
        return(
            <div>
                <Segment attached>
                    <Grid textAlign="left">
                        <Grid.Column width={6}>
                            { event.text }
                        </Grid.Column>
                        <Grid.Column width={8}>
                            { event.where }
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <DeleteModal handleDelete={this.handleDelete} />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
