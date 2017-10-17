import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content, Title ,Icon , Button, Form, H1 } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from '../DefaultHeader'

export default class EditTodoModal extends Component<{}>  {
    constructor(props) {
        super(props)

        //Sets state, tempConenet is the text in the textfield and content is the text from the todo object
        this.state = {
            tempContent: this.props.content,
            content: this.props.content,
        }
    }

    //Helpfunction for handleButtonEditClick
    handleButtonSaveClick = () => {
        const { tempContent } = this.state
        //Checks that the content in not empty
        if(tempContent !== "") {
            this.props.onButtonSaveClick(tempContent)
            //resets the state
            this.setState({
                tempContent: '',
                content: ''
            })
            //Hides the modal
            this.props.toggleModal()
            //Calls the button save function in TodoContainer
            this.handleButtonSaveClick()
        }
    }

    //Button handler for save button
    handleButtonSaveClick = () => {
        const { handleDelete } = this.props
        handleDelete()
    }

    render() {
        //define constants
        const { toggleModal, isOpen, onButtonSaveClick , content} = this.props
        const { tempContent } = this.state

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal()}}>
                <DefaultHeader title={"Edit Todo"} toggleModal={toggleModal}/>
                <View style={{flex:1}}>
                    <Content>
                        <Form>
                            <View style={{flex:1}}>
                                <H1>Write your todo here:</H1>
                                <Item>
                                    <Input
                                        onChangeText={(tempContent) => this.setState({tempContent})}
                                        value={tempContent}
                                        placeholde="Write your todo here"/>
                                </Item>
                            </View>
                        </Form>
                    </Content>
                 </View>
                <View style={{position:'absolute',bottom:0, width:'100%'}}>
                    <Button block success onPress={this.handleButtonSaveClick}>
                        <Text>Save</Text>
                    </Button>
                </View>
            </Modal>
            
        )
    }
}