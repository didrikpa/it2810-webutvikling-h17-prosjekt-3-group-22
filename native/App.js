import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import Navbar from './Navbar'
import NoteContainer from './components/Notes/NoteContainer'

import Routes from './Routes'

export default class App extends Component {
  render() {
    return (
      <Content >
        <NoteContainer/>
      </Content>
    );
  }
}


