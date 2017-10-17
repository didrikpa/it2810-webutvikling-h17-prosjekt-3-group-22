import React, { Component } from 'react'
import { Container, Header, Content,View, Footer, FooterTab, Button, Icon, Text } from 'native-base'

import { Actions } from 'react-native-router-flux'

export default class NavFooter extends Component {

    render() {

        const { active } = this.props

        const tabs = [{
            name: 'Home',
            icon: 'home',
            scene: 'home',
        },
            {
                name: 'Todos',
                icon: 'list',
                scene: 'todos',
            },
            {
                name: 'Notes',
                icon: 'clipboard',
                scene: 'notes',
            },
            {
                name: 'Events',
                icon: 'calendar',
                scene: 'events',
            },
        ];


        return (
            <View>
                <Content>
                    { this.props.children }
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={active === 'home'}
                            onPress={Actions.home}
                        >
                            <Icon name='home' />
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={active === 'todos'}
                            onPress={Actions.todos}
                        >
                            <Icon name='list' />
                            <Text>Todos</Text>
                        </Button>
                        <Button
                            vertical
                            active={active === 'notes'}
                            onPress={Actions.notes}
                        >
                            <Icon active name='clipboard' />
                            <Text>Notes</Text>
                        </Button>
                        <Button
                            vertical
                            active={active === 'events'}
                            onPress={Actions.events}
                        >
                            <Icon name='calendar' />
                            <Text>Events</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}