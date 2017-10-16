import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class NavFooter extends Component {

    state = { selectedTab: "home" }

    render() {

        const { selectedTab } = this.state

        return (
            <Container>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button vertical active={selectedTab === 'home'}
                                onPress={() => this.setState({selectedTab: 'home'})}>
                            <Icon name='home' />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical active={selectedTab === 'todos'}
                                onPress={() => this.setState({selectedTab: 'todos'})}>
                            <Icon name='list' />
                            <Text>Todos</Text>
                        </Button>
                        <Button vertical active={selectedTab === 'notes'}
                                onPress={() => this.setState({selectedTab: 'notes'})}>
                            <Icon active name='clipboard' />
                            <Text>Notes</Text>
                        </Button>
                        <Button vertical active={selectedTab === 'events'}
                                onPress={() => this.setState({selectedTab: 'events'})}>
                            <Icon name='calendar' />
                            <Text>Events</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}