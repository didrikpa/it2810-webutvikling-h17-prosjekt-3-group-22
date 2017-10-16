import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, ScrollView, Footer } from 'native-base'

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


