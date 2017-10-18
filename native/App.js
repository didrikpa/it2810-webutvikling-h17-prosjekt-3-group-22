import React, { Component } from 'react'
import { Container } from 'native-base'

import Routes from './Routes'

export default class App extends Component {
    render() {
        return (
            <Container>
              <Routes/>
            </Container>
        )
    }
}


