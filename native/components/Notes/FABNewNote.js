import React, { Component } from 'react'
import { Content,Container, Header, View, Icon, Button, Fab } from 'native-base';

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }

  handleNewNote = () => {
    const { toggleModal } = this.props
    toggleModal()
    this.setState({
      active: !this.state.active
    })

  }

  render() {

    return (
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#21BA45' }}
            position="bottomRight"
            onPress={this.handleNewNote}>
            <Icon name="add"/>
          </Fab>
        </View>

    )
  }
}
