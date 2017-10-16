import React, { Component } from 'react';
import { Container } from 'native-base';
import TodoContainer from './Todo/TodoContainer'

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <TodoContainer/>
      </Container>
    );
  }
}


