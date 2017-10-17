import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content, Title ,Icon , Button, Form,Grid ,Col } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from '../DefaultHeader'

export default class NewNoteModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tempTitle: this.props.title,
      tempContent: this.props.content,
      title: this.props.title,
      content: this.props.content,
      date: this.props.date,

    }
  }

  handleButtonSaveClick = () => {
    const {tempTitle, tempContent} = this.state
    const {toggleModal, onButtonSaveClick, handleDelete} = this.props

    onButtonSaveClick(tempTitle, tempContent)
    handleDelete()

    this.setState({
      title: '',
      content: ''
    })
    toggleModal()
  }

  handleButtonClose = () => {
    const { title, content } = this.state
    const {toggleModal} = this.props

    this.setState({
      tempTitle: title,
      tempContent: content
    })
    toggleModal()
  }


  render() {
    const { toggleModal, isOpen } = this.props
    const { tempTitle, tempContent } = this.state

    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isOpen}
          onRequestClose={() => {alert("EditNoteModal has been closed.")}}
        >

          <DefaultHeader title={"Edit Note"} toggleModal={toggleModal}/>
          <View style={{flex:1}}>
            <Content>
              <Form>

                <View style={{flex:1}}>
                  <Item floatingLabel>
                    <Label>
                      Title
                    </Label>
                    <Input
                      onChangeText={(tempTitle) => this.setState({tempTitle})}
                      value={tempTitle}/>
                  </Item>
                </View>

                <View style={{flex:2}}>
                  <Item floatingLabel>
                    <Label>
                      Content
                    </Label>
                    <Input
                      onChangeText={(tempContent) => this.setState({tempContent})}
                      value={tempContent}
                      multiline={true}
                      style={{height:300}}/>
                  </Item>
                </View>

              </Form>

            </Content>
          </View>
          <View style={{flex:1}}>
            <Grid style={{backgroundColor:'red'}}>

              <Col>
                <View style={{position:'absolute', bottom:0, width:'100%'}}>
                  <Button block
                          success
                          onPress={this.handleButtonSaveClick}
                          style={{backgroundColor:"#21BA45"}}>
                    <Text>
                      Add
                    </Text>
                  </Button>
                </View>
              </Col>

              <Col>
                <View style={{position:'absolute', bottom:0, width:'100%'}}>
                  <Button block
                          onPress={this.handleButtonClose}
                          style={{backgroundColor:"#767676"}}>
                    <Text>Close</Text>
                  </Button>
                </View>
              </Col>

            </Grid>
          </View>

        </Modal>
    )
  }
}
