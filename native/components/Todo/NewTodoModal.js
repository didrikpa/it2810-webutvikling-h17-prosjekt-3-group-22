import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content , Button, Form, Grid, Col } from 'native-base';
import { Modal, StyleSheet } from 'react-native'
import DefaultHeader from '../DefaultHeader'

export default class NewTodoModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',

        }
    }

    /**
     * Handler for save button click.
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
    handleButtonSaveClick = () => {
        const {text} = this.state
        const {toggleModal, onButtonSaveClick} = this.props

        onButtonSaveClick(text)
        this.clearInput()
        toggleModal()
    }

    /**
     * Handle for button close click.
     * Resets the original content to state
     * Closes model
     */
    handleButtonCloseClick = () => {
        const {toggleModal} = this.props
        this.clearInput()
        toggleModal()

    }

    /**
     * Clear title and content in state
     */
    clearInput = () => {
        this.setState({
            text: '',
        })
    }


    render() {
        const { isOpen } = this.props
        const { text } = this.state

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {alert("NewTodoModal has been closed.")}}>

                <DefaultHeader title={"New Todo"} toggleModal={this.handleButtonCloseClick}/>
                <View style={styles.view}>
                    <Content >
                        <Form>
                            <View style={styles.view}>
                                <Item floatingLabel>
                                    <Label>
                                        Your todo
                                    </Label>
                                    <Input
                                        onChangeText={(text) => this.setState({text})}
                                        value={text}/>
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
                                <Text>
                                    Close
                                </Text>
                            </Button>
                        </View>
                    </Col>

                </Grid>

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
