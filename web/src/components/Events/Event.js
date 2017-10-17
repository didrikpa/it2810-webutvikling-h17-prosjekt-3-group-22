import React, { Component } from 'react'
import { Segment, Grid, Header, Button, Divider } from 'semantic-ui-react'
import moment from 'moment'

import DeleteModal from '../DeleteModal'
import EditModal from './EditModal'

export default class Event extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * Delets the event using the DeleteModal importet
     */
    handleDelete = () => {
        const { event, deleteItem } = this.props
        deleteItem(event)
    }

    /**
     * Calls the EditModal function updateEvent with the input
     */
    handleEdit = (text, where, date) => {
        this.props.updateEvent(text, where, date)
    }

    render() {
        const { event, isNew } = this.props
        return(
            <div>

                /**
                 * If isNew is true a new header is made for that date.
                 */
                {isNew ?
                    <div>
                        <Divider hidden/>
                        <Segment attached textAlign="center">
                            <Header>{moment(event.date).format('dddd')} {moment(event.date).format('Do')}</Header>
                        </Segment>
                    </div> : undefined
                }

                /**
                 * Displaing the event with text, location, date and
                 * delete and edit - buttons                
                 */
                <Segment attached>
                    <Grid verticalAlign="middle">
                        <Grid.Row textAlign="center">
                            <Grid.Column width={4}>
                                {event.text}
                            </Grid.Column>
                            <Grid.Column width={5}>
                                {event.where}
                            </Grid.Column>
                            <Grid.Column width={4}>
                                {moment(event.date).format('HH:mm')}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Button.Group>
                                    <EditModal event={event} updateEvent={this.handleEdit} handleDelete={this.handleDelete}/>
                                    <DeleteModal handleDelete={this.handleDelete} title="Event"/>
                                </Button.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
