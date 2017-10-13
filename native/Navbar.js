import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';

export default class Navbar extends Component<{}> {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Tabs initialPage={1} >
            <Tab heading='Home' onClick={this.handleItemClick}>
            </Tab>
            <Tab heading='Todos' onClick={this.handleItemClick}>
            </Tab>
            <Tab heading='Notes' onClick={this.handleItemClick}>
            </Tab>
            <Tab heading='Events' onClick={this.handleItemClick}>
            </Tab>
        </Tabs>
      </Container>
    )
  }
}
