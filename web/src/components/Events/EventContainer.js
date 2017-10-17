import React, { Component } from 'react'
import { Divider, Grid, Header, Segment, Container, Button } from 'semantic-ui-react'
import moment from 'moment'

import Event from './Event'
import CreateEvent from './CreateEvent'
import EditModal from './EditModal'
import Navbar from '../Navbar'
import Footer from "../Footer"

export default class EventContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            month: moment()
        }
    }

    componentWillMount = () => {
        let localEvents = JSON.parse(localStorage.getItem('events'))
        this.setState({
            events: localEvents || []
        })
    }

    /**
     * Functions for changing month displayd
     */
    decrementMonth = () => {
        this.setState({
            month: this.state.month.subtract(1, 'month')
        })
    }

    incrementMonth = () => {
        this.setState({
            month: this.state.month.add(1, 'month')
        })
    }

    /**
     * Updates event with the information given when creating the event and
     * then adding the event to the Events-list.
     */
    updateEvent = (text, where, date) => {
        let { events } = this.state
        let event = {
            text: text,
            where: where,
            now: moment(),
            date: date,
        }
        events.push(event)
        this.updateState({
            events: events
        })
    }

    /**
     * Function for deleting an event
     */
    deleteItem = (event) => {
        let { events } = this.state
        const i = events.indexOf(event)
        if (i >= 0) {
            events.splice(i, 1)
            this.updateState({
                events: events
            })
        } else {
            console.error(`[EventContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    updateLocalStorage = () => {
        const { events } = this.state
        localStorage.clear()
        localStorage.setItem('events', JSON.stringify(events))
    }

    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    render () {
        const { events, month } = this.state
        const { now } = this.props
        let sortedEvents = events.filter((event) => moment(event.date).format('YYYY-MM') === month.format('YYYY-MM')).sort((b,a) = { return moment(b.date).unix() - moment(a.date).unix()})
        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Container text textAlign='center'>

                    /**
                     * Displays the buttons for changing month and the month
                     * for the events displays.                    
                     */
                    <Grid>
                        <Grid.Column width={3}>
                            <Button content='Last' icon='left arrow' labelPosition='left' onClick={this.decrementMonth}/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header as='h1' >{month.format('MMMM')}</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button content='Next' icon='right arrow' labelPosition='right' onClick={this.incrementMonth}/>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden/>

                    /**
                     * The modal for creating an event
                     */
                    <CreateEvent updateEvent={this.updateEvent}/>
                    <div>

                        /**
                         * Sorting the events by date and displaying them
                         * Sending the isNew variable as true, if the new event
                         * does not match any of the dates in the event-list
                         */
                        {sortedEvents.map((event, index) => {
                            let n = true
                            if (index > 0) {
                                n = moment(event.date).format('YYYY-MM-DD') !== moment(sortedEvents[index-1].date).format('YYYY-MM-DD')
                            }
                            return (
                                <Event
                                    key={event.now}
                                    event={event}
                                    deleteItem={this.deleteItem}
                                    updateEvent={this.updateEvent}
                                    isNew={n}
                                />
                            )
                        })}
                    </div>
                    <Divider hidden/>
                </Container>
                <Footer/>
            </div>
        )
    }
}
