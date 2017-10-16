import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class NavFooter extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="list" />
                            <Text>Todos</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="clipboard" />
                            <Text>Notes</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="calendar" />
                            <Text>Events</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}