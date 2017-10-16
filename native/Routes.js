import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import { Container } from 'native-base'

import NavFooter from './NavFooter'

export default class Routes extends Component<{}> {
    render = () => {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="notes" component={Notes} title="Notes"/>
                    <Scene key="todos" component={Todos} title="Todos"/>
                    <Scene key="events" component={Events} title="Events"/>
                </Stack>
            </Router>
        )
    }
}

const Todos = () => (
    <Container>
        <Text>Todos!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
        <View style={{ bottom: 0}}>
            <NavFooter active='todos' />
        </View>
    </Container>
)

const Notes = () => (
    <View>
        <Text>Notes!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
        <View style={{ bottom: 0}}>
            <NavFooter active='notes' />
        </View>
    </View>
)

const Events = () => (
    <View>
        <Text>Events!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
        <View style={{ bottom: 0}}>
            <NavFooter active='events' />
        </View>
    </View>
)

const Home = () => (
    <View>
        <Text>Home!</Text>
        <Button title="Notes" onPress={Actions.notes}>Pop</Button>
        <Button title="Todos" onPress={Actions.todos}>Pop</Button>
        <Button title="Events" onPress={Actions.events}>Pop</Button>
        <View style={{ bottom: 0}}>
            <NavFooter active='home' />
        </View>
    </View>
)

const Master = ({ children }) => (
    <View>
        {children}
    </View>
)