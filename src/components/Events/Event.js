import React, { Component } from 'react'
import { Segment, Grid, Header } from 'semantic-ui-react'
import moment from 'moment'

import DeleteModal from '../DeleteModal'
import EditModal from './EditModal'

export default class Event extends Component {
    constructor(props) {
        super(props)
    }

    handleDelete = () => {
        const { event, deleteItem } = this.props
        deleteItem(event)
    }

    handleEdit = (text, where, date, time) => {
        this.props.updateEvent(text, where, date, time)
    }

    render() {
        const { event } = this.props
        return(
            <div>
                <Segment attached textAlign="center">
                    <Header>{ event.day }</Header>
                </Segment>
                <Segment attached>
                    <Grid>
                        <Grid.Row textAlign="left">
                            <Grid.Column width={1}>
                                <EditModal event={event} updateEvent={this.handleEdit} handleDelete={this.handleDelete}/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                { event.text }
                            </Grid.Column>
                            <Grid.Column width={5}>
                                { event.where }
                            </Grid.Column>
                            <Grid.Column width={3}>
                                { moment(event.date).format('HH:mm') }
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <DeleteModal handleDelete={this.handleDelete} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
