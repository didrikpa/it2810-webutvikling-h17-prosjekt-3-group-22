import React, { Component } from 'react'
import {  View, Icon, Fab } from 'native-base';

export default class FABNewItem extends Component {

    /**
     * Handle button click for new note
     * Open new note modal
     */
  handleNewNote = () => {
      const { toggleModal } = this.props
      toggleModal()
  }

  render() {
      return (
          <View style={{ flex: 1 }}>
              <Fab
                  active
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
