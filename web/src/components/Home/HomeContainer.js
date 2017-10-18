import React from 'react'
import { Header, Divider, Container } from 'semantic-ui-react'

/**
 * Define local CSS for this Component.
 */
const preStyle = {
    backgroundColor: '#eee',
    border: '0.1rem',
    solid: '#999',
    display: 'flex',
    padding: '1rem'
}

/**
 * Define HomeContainer as a 'dumb' Component.
 * Because the Component doesn't have any built in logic,
 * it is only defined as a function which returns JSX.
 */
const HomeContainer = () => (
    <div>
        <Divider hidden />

        <Container text>
            <Header as='h1'> PIM</Header>
            <p>
                With this application you can create and store your todos, notes and events locally on your device!
            </p>
            <Header as='h3'>
                Want to run it for yourself? Our code is avaible on Github!
            </Header>
            <p>To run it you need to first install nodejs to your system, we use version 8.6.</p>
            <p>Then you need to clone our repository</p>

            <pre><code style={preStyle}>
                git clone https://github.com/IT2810/<br></br>
                it2810-webutvikling-h17-prosjekt-3-group-22.git
            </code></pre>

            <p>Enter the project directory</p>

                <pre><code style={preStyle}>
                    cd it2810-webutvikling-h17-prosjekt-3-group-22
                </code></pre>

            <p>install webpack and webpack-dev-server globally on your system</p>
            <p>Note that you may need to use <code>sudo</code> on *NIX systems, depending on your configuration</p>

            <pre><code style={preStyle}>
                npm install webpack webpack-dev-server -g
            </code></pre>

            <p>Install project dependencies locally to the project</p>

            <pre><code style={preStyle}>
                npm install
            </code></pre>

            <p>Run the project</p>

            <pre><code style={preStyle}>
                npm start
            </code></pre>

            <p>The website will be available locally on your machine at <code>localhost:8000</code>.</p>
            <br/>
        </Container>
    </div>
)

export default HomeContainer
