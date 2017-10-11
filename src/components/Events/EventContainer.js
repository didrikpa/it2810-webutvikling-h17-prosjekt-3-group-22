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
            events: []
        }
    }

    componentWillMount = () => {
        let localEvents = JSON.parse(localStorage.getItem('events'))
        this.setState({
            events: localEvents || []
        })
    }

    updateEvent = (text, where, date, time) => {
        const { events } = this.state
        let d = moment(date).format('YYYY-MM-DD')
        console.log(d, time)
        let d2 = moment(d + ' ' + time, 'YYYY-MM-DD HH:mm')
        console.log(d2)
        let event = {
            text: text,
            where: where,
            now: moment(),
            date: d2
        }
        events.push(event)
        this.updateState({
            events: events
        })
    }

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
        localStorage.setItem('events', JSON.stringify(events))
    }

    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    render () {
        const { events, event } = this.state
        const { now } = this.props
        const sortedEvents = events.sort((b,a) => { return moment(b.date).unix() - moment(a.date).unix()}) 
        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Container text textAlign='center'>
                    <Grid>
                        <Grid.Column width={3}>
                            <Button content='Last' icon='left arrow' labelPosition='left'/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header as='h1' >{moment(now).format('MMMM')}</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button content='Next' icon='right arrow' labelPosition='right'/>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden/>
                    <CreateEvent updateEvent={this.updateEvent}/>
                    <div>
                        {sortedEvents.map((event, index) => {
                            let n = true
                            if (index > 0) {
                                n = moment(event.date).format('YYYY-MM-DD') !== moment(sortedEvents[index-1].date).format('YYYY-MM-DD')
                            }
                            return (
                                <Event
                                    key={event.createdAt}
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
