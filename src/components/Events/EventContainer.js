import React, { Component } from 'react'
import { Divider, Grid, Header, Segment, Container, Button } from 'semantic-ui-react'

import CreateEvent from './CreateEvent'
import Navbar from '../Navbar'

export default class EventContainer extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Container text textAlign="center">
                    <Header as="h1">Eventsuff goes here</Header>
                    <div>
                        <Header as='h5' attached='top'>
                            Mandag
                        </Header>
                        <Segment attached>
                            Event...
                        </Segment>
                    </div>
                    <Divider hidden/>
                    <CreateEvent OpenModalForEvent={this.OpenModalForEvent}/>
                </Container>
            </div>
        )
    }
}
