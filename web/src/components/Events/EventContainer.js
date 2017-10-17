import React, { Component } from 'react'
import { Divider, Grid, Header, Container, Button } from 'semantic-ui-react'
import moment from 'moment'

import Event from './Event'
import CreateEvent from './CreateEvent'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default class EventContainer extends Component {
    constructor (props) {
        super(props)
        /**
         * Set the initial state on the Component.
         * Initialize Events as an empty list because Component isn't mounted yet.
         * Set the Month as the current time with Moment.js
         * We only use the month and year of the object, but we need the moment functionality to increment and decremnt the month.
         */
        this.state = {
            events: [],
            month: moment()
        }
    }

    /**
     * Use built in method to fetch Events from localStorage on the host.
     * If localStoreage doesn't contain any Events, set an empty list to avoid problems.
     */
    componentWillMount = () => {
        let localEvents = JSON.parse(localStorage.getItem('events'))
        this.setState({
            events: localEvents || []
        })
    }

    /**
     * This method uses Moment.sj to subract a month to the current Month object in the state.
     */
    decrementMonth = () => {
        this.setState({
            month: this.state.month.subtract(1, 'month')
        })
    }

    /**
     * This method uses Moment.sj to add a month to the current Month object in the state.
     */
    incrementMonth = () => {
        this.setState({
            month: this.state.month.add(1, 'month')
        })
    }

    /**
     * This method updates an existing event, or creates a new one if it doesn't exist.
     * @param text Description or identifier of the Event given as a String.
     * @param where Location of the event given as a String.
     * @param date Date of the event given as a Moment.js object.
     */
    updateEvent = (text, where, date) => {
        let { events } = this.state
        let event = {
            text: text,
            where: where,
            now: moment(),
            date: date
        }
        events.push(event)
        this.updateState({
            events: events
        })
    }

    /**
     * This method deletes a given event from the state.
     * @param event Event to be deleted.
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

    /**
     * This method is used to update localStorage on the host with the current state od the Component.
     */
    updateLocalStorage = () => {
        const { events } = this.state
        localStorage.setItem('events', JSON.stringify(events))
    }

    /**
     * This method is used as a wrapper for the Component setState() method.
     * It is used so that the localStorage is updated every time the state is finished setting.
     */
    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    render () {
        /**
         * Fetch 'events' and 'month' from Component State.
         */
        const { events, month } = this.state

        /**
         * To display the events we need to filter and sort them.
         * First we filter the events on the month.
         * We only want to display the events happening the month selected in the Component State.
         * Then we sort the events we are left with on the absolute timestamp in ascending order.
         */
        let sortedEvents = events
            .filter((event) => {
                return moment(event.date).format('YYYY-MM') === month.format('YYYY-MM')
            }).sort((b, a) => {
                return moment(b.date).unix() - moment(a.date).unix()
            })

        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Container text textAlign='center'>
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
                    <CreateEvent updateEvent={this.updateEvent}/>
                    <div>
                        {sortedEvents.map((event, index) => {
                            let n = true
                            if (index > 0) {
                                n = moment(event.date).format('YYYY-MM-DD') !== moment(sortedEvents[index - 1].date).format('YYYY-MM-DD')
                            }
                            return (
                                <Event
                                    key={event.date}
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
