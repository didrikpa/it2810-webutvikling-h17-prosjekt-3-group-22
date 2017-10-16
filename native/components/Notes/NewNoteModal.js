import React, { Component } from 'react'
import { Label, Item, Input, Content, Title ,Icon , Button, Form } from 'native-base';
import { Modal } from 'react-native'
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


  render() {
    const { toggleModal, isOpen } = this.props

    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isOpen}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >

        <DefaultHeader title={"New Note"} toggleModal={toggleModal}/>
          <Content >
            <Form>
              <Item floatingLabel>
                <Label>
                  Title
                </Label>
                  <Input />
              </Item>

              <Item floatingLabel>
                <Label>
                  Content
                </Label>
                <Input
                  multiline={true}
                  numberOfLines={5}
                  style={{height:200}}/>
              </Item>
            </Form>

          </Content>

        </Modal>
    )
  }
}
