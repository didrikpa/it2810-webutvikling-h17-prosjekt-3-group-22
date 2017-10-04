import React, { Component } from 'react'
import { Grid, Container, Divider} from 'semantic-ui-react'
import FooterWrapper from './FooterWrapper'


class Footer extends Component {

    render () {
        return (
            <FooterWrapper>
                <Grid columns={1}>
                    <Grid.Column textAlign='center'>
                        <Container text>
                            <h3>
                                Personal Information Manager Project
                            </h3>
                            <Divider/>
                            <p>
                                The PIMP is made as a group project in
                                the course IT2810 Web Development at NTNU.
                            </p>
                        </Container>
                    </Grid.Column>
                </Grid>
            </FooterWrapper>
        )
    }

}

export default Footer