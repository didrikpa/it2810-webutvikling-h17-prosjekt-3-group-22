import React, { Component } from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'

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
                <Grid width={16}>
                    <Grid.Column width={16} textAlign="center">
                        <Header as="h1">Eventsuff goes here</Header>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
