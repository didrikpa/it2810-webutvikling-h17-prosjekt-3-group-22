import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content, Title ,Icon , Button, Form, Grid, Col } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from '../DefaultHeader'

export default class NewNoteModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',

    }
  }

  handleButtonSaveClick = () => {
    const {title, content} = this.state
    const {toggleModal, onButtonSaveClick} = this.props

    onButtonSaveClick(title, content)
    this.clearInput()
    toggleModal()
  }

  handleButtonCloseClick = () => {
    const {toggleModal} = this.props
    this.clearInput()
    toggleModal()

  }

  clearInput = () => {
    this.setState({
      title: '',
      content: '',
    })
  }


  render() {
    const { toggleModal, isOpen, onButtonSaveClick } = this.props
    const { title, content } = this.state

    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isOpen}
          onRequestClose={() => {alert("NewNoteModal has been closed.")}}>

          <DefaultHeader title={"New Note"} toggleModal={this.handleButtonCloseClick}/>
          <View style={{flex:1}}>
            <Content >
              <Form>
                <View style={{flex:1}}>
                  <Item floatingLabel>
                    <Label>
                      Title
                    </Label>
                    <Input
                      onChangeText={(title) => this.setState({title})}
                      value={title}/>
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
                      style={{height:300}}/>
                  </Item>
                </View>
              </Form>
            </Content>

          </View>
          <Grid>

            <Col>
              <View style={{position:'absolute',bottom:0, width:'100%'}}>
                <Button
                  block
                  success
                  onPress={this.handleButtonSaveClick}>
                  <Text>Add</Text>
                </Button>
              </View>
            </Col>

            <Col>
              <View style={{position:'absolute',bottom:0, width:'100%'}}>
                <Button
                  block
                  onPress={this.handleButtonSaveClick}
                  style={{backgroundColor:"#767676"}}>
                  <Text>Close</Text>
                </Button>
              </View>
            </Col>

          </Grid>

        </Modal>
    )
  }
}
