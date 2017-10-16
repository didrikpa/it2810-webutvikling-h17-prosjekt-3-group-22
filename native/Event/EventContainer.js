import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import moment from 'moment';

import Navbar from '../Navbar'
import Footer from "../Footer"

export default class ButtonThemeExample extends Component {
  render() {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            month: moment()
        }
    }

    return (
        <div>
            <Navbar/>
                <Container textAlign='center'>
                    <Grid>
                        <Col width={3}><Button light><Text> Last </Text></Button></Col>
                        <Col width={3}><Header as='h1' ><Text>{{month.format('MMMM')}</Text>}</Header></Col>
                        <Col width={3}><Button light><Text> Next </Text></Button></Col>
                    </Grid>
                </Container>
            <Footer/>
        </div>
    );
  }
}
