import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'

import DeleteModal from '../DeleteModal'

export default class Event extends Component {
    constructor(props) {
        super(props)

        console.log(props)
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
                    <Grid>
                        <Grid.Column width={14}>
                            { event.text }
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
