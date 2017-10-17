import React, { Component } from 'react'
import { Segment, Grid, Header, Button, Divider } from 'semantic-ui-react'
import moment from 'moment'

import DeleteModal from '../DeleteModal'
import EditModal from './EditModal'

export default class Event extends Component {
    /**
     * This method handles the deletion of the Event this Component represents.
     * Uses the properties passed from the parent to remove itself.
     */
    handleDelete = () => {
        this.props.deleteItem(this.props.event)
    }

    /**
     * This method is used to trigger the parents' updateEvent() method.
     * This mathod is called by the EditModal child of this Component.
     * @param text Updated Description of this Component's event.
     * @param where Updated Location of this Component's event.
     * @param date Updated Date of this Component's event.
     */
    handleEdit = (text, where, date) => {
        this.props.updateEvent(text, where, date)
    }

    render = () => {
        /**
         * Fetch 'event' and 'isNew' from properties passed from parent.
         * Format Date and Time stamps to human readable formats.
         */
        const { event, isNew } = this.props
        const dayName = moment(event.date).format('dddd')
        const dateNumber = moment(event.date).format('Do')
        const time = moment(event.date).format('HH:mm')
        return (
            <div>
                /**
                 * If isNew is true a new header is made for that date.
                 */
                {isNew ?
                    <div>
                        <Divider hidden/>
                        <Segment attached textAlign="center">
                            <Header>{ dayName } { dateNumber }</Header>
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
                                { event.text }
                            </Grid.Column>
                            <Grid.Column width={5}>
                                { event.where }
                            </Grid.Column>
                            <Grid.Column width={4}>
                                { time }
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
