import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import { Container, Content } from 'native-base'
import NoteContainer from './components/Notes/NoteContainer'
import TodoContainer from './components/Todo/TodoContainer'
import NavFooter from './components/NavFooter'
import HomeComponent from './components/HomeComponent'
import HeaderMenu from "./components/HeaderMenu";

export default class Routes extends Component {
    render = () => {
        return(
            <Router navigationBarStyle={styles.navBar} backAndroidHandler={Actions.home}>
                <Stack key="root">
                    <Scene key="home"
                           component={Home}
                           title="Home"
                           headerTitleStyle={styles.title}
                           navBarButtonColor='#b3c7f9'
                           init={true}/>
                    <Scene key="notes"
                           component={Notes}
                           title="Notes"
                           headerTitleStyle={styles.title}
                           navBarButtonColor='#b3c7f9'
                           />
                    <Scene key="todos"
                           component={Todos}
                           title="Todos"
                           headerTitleStyle={styles.title}
                           navBarButtonColor='#b3c7f9'
                           />
                    <Scene key="events"
                           component={Events}
                           title="Events"
                           headerTitleStyle={styles.title}
                           navBarButtonColor='#b3c7f9'/>
                </Stack>
            </Router>
        )
    }
}

const Todos = () => (
    <Container>
        <TodoContainer/>
        <NavFooter active="todos"/>
    </Container>
)

const Notes = () => (
    <Container>
        <NoteContainer/>
        <NavFooter active="notes"/>
    </Container>
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

class BackButton extends Component {
    render () {
        return (
            <Button>
                <Icon name='home' onPress={ Actions.home }  style={styles.color}/>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor:'#1b1c1d',
    },
    title: {
        fontWeight:'500',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
        alignSelf:'center',
        color: '#b3c7f9',
    },
    color: {
        color: '#b3c7f9'
    }
})
