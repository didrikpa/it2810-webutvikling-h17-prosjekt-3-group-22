import React, { Component } from 'react'
import { Divider, Grid, Header, Segment, Container, Button } from 'semantic-ui-react'

import Event from './Event'
import CreateEvent from './CreateEvent'
import Navbar from '../Navbar'

export default class EventContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: []
        }
    }

    componentWillMount = () => {
        //localStorage.clear()
        let localEvents = JSON.parse(localStorage.getItem('events'))
        this.setState({
            events: localEvents || []
        })
    }

    onButtonClick = (text) => {
        const { events } = this.state
        let event = {
            text: text,
            date: new Date()
        }
        events.push(event)
        this.updateState({
            events: events
        })
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
        const { events } = this.state
        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Container text textAlign="center">
                    <Grid>
                        <Grid.Column width={3}>
                            <Button>Last</Button>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header as="h1">Week 42</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button>Next</Button>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden/>
                    <div>
                        <Header as='h3' attached='top'>
                            Mandag
                        </Header>
                        { events.map((event) => <Event key={event.date} event={event}/>) }
                    </div>
                    <Divider hidden/>
                    <CreateEvent onButtonClick={this.onButtonClick}/>
                </Container>
            </div>
        )
    }
}
