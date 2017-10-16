import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, ScrollView, Footer } from 'native-base'
import { Platform, StyleSheet, View } from 'react-native'
import { Router } from 'react-native-router-flux'

import NavFooter from './components/NavFooter'
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


