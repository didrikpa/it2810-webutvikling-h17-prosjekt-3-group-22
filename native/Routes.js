import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'

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
    <View>
        <Text>Todos!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
    </View>
)

const Notes = () => (
    <View>
        <Text>Notes!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
    </View>
)

const Events = () => (
    <View>
        <Text>Events!</Text>
        <Button title="Pop" onPress={Actions.pop}>Pop</Button>
    </View>
)

const Home = () => (
    <View>
        <Text>Home!</Text>
        <Button title="Notes" onPress={Actions.notes}>Pop</Button>
        <Button title="Todos" onPress={Actions.todos}>Pop</Button>
        <Button title="Events" onPress={Actions.events}>Pop</Button>
    </View>
)

const Master = ({ children }) => (
    <View>
        {children}
    </View>
)