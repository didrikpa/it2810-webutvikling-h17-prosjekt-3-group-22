import React, { Component } from 'react'
import { Grid, Header, Divider, Container } from 'semantic-ui-react'

import Navbar from '../Navbar'
import Footer from '../Footer';

class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Divider hidden/>

                <Container text>
                    <Header as='h1'> PIM</Header>
                    <p>
                        With this application you can create and store your todos, notes and events locally on your device!
                    </p>
                    <Header as='h3'>
                        Want to run it for yourself? Our code is avaible on Github!
                    </Header>
                    <p># To run it you need to frist install nodejs to your system, we use version 8.6.</p>
                    <p># Then you need to clone our repository</p>

                    <p>git clone https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-3-group-22.git</p>

                    <p># Enter the project directory</p>

                    <p>cd it2810-webutvikling-h17-prosjekt-3-group-22</p>

                    <p># install webpack and webpack-dev-server globally on your system</p>
                    <p># Note that you may need to use 'sudo' on *NIX systems, depending on your configuration</p>

                    <p>npm install webpack webpack-dev-server -g</p>

                    <p># Install projec dependencies locally to the project</p>

                    <p>npm install</p>

                    <p># Run the project</p>

                    <p>npm start</p>

                    <p># The website will be available locally on your machine at 'localhost:8000'</p>
                </Container>
            </div>
        )
    }


}
export default HomeContainer
