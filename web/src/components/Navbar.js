import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

/**
 * Define Navbar as a 'dumb' Component.
 * Because the Component doesn't have any built in logic,
 * it is only defined as a function which returns JSX.
 */
const Navbar = () => {
    /**
     * Fetch the pathname from the 'window.location' defined in the browser.
     * This is used to select which Menu.Item that is set as 'active'.
     * E.g. 'example.com/todos' in the URL field in the browser returns the 'pathname': '/todos'.
     */
    const { pathname } = window.location
    return (
        <Menu inverted size='massive'>
            <Container text>
                <Link to="/">
                    <Menu.Item name='home' active={pathname === '/'}>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/todos">
                    <Menu.Item name='todos' active={pathname === '/todos'}>
                        Todos
                    </Menu.Item>
                </Link>
                <Link to="/notes">
                    <Menu.Item name='notes' active={pathname === '/notes'}>
                        Notes
                    </Menu.Item>
                </Link>
                <Link to="/events">
                    <Menu.Item name='events' active={pathname === '/events'}>
                        Events
                    </Menu.Item>
                </Link>
            </Container>
        </Menu>
    )
}

export default Navbar
