import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted size='massive'>
        <Container text>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/todos">
            <Menu.Item name='todos' active={activeItem === 'todos'} onClick={this.handleItemClick}>
              Todos
            </Menu.Item>
          </Link>
          <Link to="/notes">
            <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
              Notes
            </Menu.Item>
          </Link>
          <Link to="/events">
            <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick}>
              Events
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    )
  }
}
