import React, { Component } from 'react'
import { Container,View, Header, Text, Content,Left,Right, Title, Body, Tab,Icon, Button, Tabs } from 'native-base';
import { Modal, TouchableHighlight } from 'react-native'
import Note from './Note'
import HeaderMenu from '../HeaderMenu'

export default class NoteContainer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
      newModalOpen: false,

    }
  }

  toggleNewModal = () => {
    this.setState({
      newModalOpen: !this.state.newModalOpen
    })
  }

  onButtonSaveClick = (title, content) => {
    const { notes } = this.state
    let note = {
      title: title,
      content: content,
      date: moment()
    }

    notes.push(note)
    this.updateState({
      notes: notes,
      newModalOpen: false
    })

  }

  render() {
    const { activeItem } = this.state

    return (
      <Content>
        <HeaderMenu title={'Notes'}
        toggleModal={this.toggleNewModal}/>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.newModalOpen}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >

          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
              <Button transparent
                      onPress={this.toggleNewModal}>
                <Icon name='close' />
              </Button>

            </View>
          </View>

        </Modal>
      </Content>
    )
  }
}
