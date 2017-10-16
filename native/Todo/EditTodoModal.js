import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content, Title ,Icon , Button, Form } from 'native-base';
import { Modal } from 'react-native'

export default class EditTodoModal extends Component<{}>  {

    constructor(props) {
        super(props)

        this.state = {
            tempContent: this.props.content,
            content: this.props.content,
            date: this.props.date
        }
    }

    handleButtonSaveClick = () => {
        const { tempContent } = this.state
        if(tempContent !== "") {
            this.props.onButtonSaveClick(tempContent)
            this.setState({
                tempContent: '',
                content: ''
            })

            this.props.toggleModal()
        }
    }

    handleButtonEditClick = () => {
        const { handleDelete } = this.props
        handleDelete()
        this.handleButtonSaveClick()
    }

    render() {
        const { toggleModal, isOpen, onButtonSaveClick , content} = this.props
        const { tempContent } = this.state
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal()}}
            >

                <View style={{flex:1}}>
                    <Content >
                        <Form>
                            <View style={{flex:1}}>
                                <Item floatingLabel>
                                    <Label>
                                        Todo
                                    </Label>
                                    <Input
                                        onChangeText={(tempContent) => this.setState({tempContent})}
                                        value={tempContent}
                                    />
                                </Item>
                            </View>
                        </Form>
                    </Content>
                 </View>
                <View style={{position:'absolute',bottom:0, width:'100%'}}>
                    <Button block success onPress={this.handleButtonEditClick}>
                        <Text>Save</Text>
                    </Button>

                </View>
            </Modal>
            
        )
    }
}