import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu inverted size='massive'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item name='todos' active={activeItem === 'todos'} onClick={this.handleItemClick}>
            <Link to="todos">Todos</Link>
          </Menu.Item>

          <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
              <Link to="notes">Notes</Link>
          </Menu.Item>

            <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick}>
                <Link to="events">Events</Link>
            </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
