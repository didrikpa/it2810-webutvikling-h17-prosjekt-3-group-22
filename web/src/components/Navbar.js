import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default () => {
    const location = window.location.pathname
    return (
        <Menu inverted size='massive'>
            <Container text>
                <Link to="/">
                    <Menu.Item name='home' active={location === '/'}>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/todos">
                    <Menu.Item name='todos' active={location === '/todos'}>
                        Todos
                    </Menu.Item>
                </Link>
                <Link to="/notes">
                    <Menu.Item name='notes' active={location === '/notes'}>
                        Notes
                    </Menu.Item>
                </Link>
                <Link to="/events">
                    <Menu.Item name='events' active={location === '/events'}>
                        Events
                    </Menu.Item>
                </Link>
            </Container>
        </Menu>
    )
}
