import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content, Title ,Icon , Button, Form } from 'native-base';
import { Modal, StyleSheet } from 'react-native'
import DefaultHeader from '../DefaultHeader'

export default class NewNoteModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      notes: [],
    }
  }

  handleButtonSaveClick = () => {
    const {title, content} = this.state
    const {toggleModal, onButtonSaveClick} = this.props

    onButtonSaveClick(title, content)
    this.setState({
      title: '',
      content: ''
    })
    toggleModal()
  }


  render() {
    const { toggleModal, isOpen, onButtonSaveClick } = this.props
    const { title, content } = this.state

    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isOpen}
          onRequestClose={() => {alert("NewNoteModal has been closed.")}}
        >
          <DefaultHeader title={"New Note"} toggleModal={toggleModal}/>
      <View style={styles.view}>
          <Content>
            <Form>
              <View style={styles.view}>
                <Item floatingLabel>
                  <Label>
                    Title
                  </Label>
                    <Input
                      onChangeText={(title) => this.setState({title})}
                      value={title}
                      style={styles.noteTitle}
                    />
                </Item>
              </View>

              <View style={{flex:2}}>
                <Item floatingLabel>
                  <Label>
                    Content
                  </Label>
                  <Input
                    onChangeText={(content) => this.setState({content})}
                    value={content}
                    multiline={true}
                    style={styles.noteContent}/>
                </Item>
              </View>
            </Form>
          </Content>
      </View>
          <View style={styles.addButtonView}>
            <Button style={styles.addButton} block onPress={this.handleButtonSaveClick}>
              <Text style={styles.addText}>add note</Text>
            </Button>
          </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: "#f5fcff"
    },
    addButtonView: {
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    noteContent: {
        height: 200,
        textAlignVertical: 'top',
    },
    addButton: {
        backgroundColor: "#21ba45"
    },
    addText: {
        fontSize: 20
    }
})
