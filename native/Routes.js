import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import { Container, Content } from 'native-base'
import NoteContainer from './components/Notes/NoteContainer'
import TodoContainer from './components/Todo/TodoContainer'
import NavFooter from './components/NavFooter'
import HomeComponent from './components/HomeComponent'

export default class Routes extends Component {
    render = () => {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="home"
                           component={Home}
                           title="Home"
                           titleStyle={{ alignSelf: 'center'}}/>
                    <Scene key="notes"
                           component={Notes}
                           title="Notes"
                           titleStyle={{ alignSelf: 'center'}}/>
                    <Scene key="todos"
                           component={Todos}
                           title="Todos"
                           titleStyle={{ alignSelf: 'center'}}/>
                    <Scene key="events"
                           component={Events}
                           title="Events"
                           titleStyle={{ alignSelf: 'center'}}/>
                </Stack>
            </Router>
        )
    }
}

const Todos = () => (
    <TodoContainer/>
)

const Notes = () => (
    <NoteContainer/>
)

const Events = () => (
    <Container>
        <Text>Events!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
        <NavFooter active='events' />
    </Container>
)

const Home = () => (
    <Container>
        <HomeComponent/>
        <NavFooter active='home' />
    </Container>
)

const Master = ({ children }) => (
    <View>
        {children}
    </View>
)