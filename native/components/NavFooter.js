import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content,View, Footer, FooterTab, Button, Icon, Text } from 'native-base'

import { Actions } from 'react-native-router-flux'

export default class NavFooter extends Component {

    render() {

        const { active } = this.props

        return (
            <View>
                <Content>
                    { this.props.children }
                </Content>
                <Footer>
                    <FooterTab style={styles.footerTab}>
                        <Button
                            vertical
                            active={active === 'home'}
                            onPress={() => {
                                Actions.pop()
                                Actions.home()
                            }}
                        >
                            <Icon name='home' color="#e2e2e2"/>
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={active === 'todos'}
                            onPress={() => {
                                Actions.pop()
                                Actions.todos()
                            }}
                        >
                            <Icon name='list' color="red"/>
                            <Text>Todos</Text>
                        </Button>
                        <Button
                            vertical
                            active={active === 'notes'}
                            onPress={() => {
                                Actions.pop()
                                Actions.notes()
                            }}
                        >
                            <Icon active name='clipboard' color="#e2e2e2" />
                            <Text>Notes</Text>
                        </Button>
                        <Button
                            vertical
                            active={active === 'events'}
                            onPress={() => {
                                Actions.pop()
                                Actions.events()
                            }}
                        >
                            <Icon name='calendar' color="#e2e2e2" />
                            <Text>Events</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        footerTab: {
            backgroundColor: "#1b1c1d"
        }
}
)