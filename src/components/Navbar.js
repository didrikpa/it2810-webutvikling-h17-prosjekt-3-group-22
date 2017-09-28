import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu inverted size='massive'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='todos' active={activeItem === 'todos'} onClick={this.handleItemClick} />
          <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick} />
          <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} />
        </Menu>
      </Container>
    )
  }
}
