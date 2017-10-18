import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content , Button, Form, Grid ,Col } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import {views, button, noteEditMod } from '../../styles'

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

    /**
     * Handler for save button click.
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
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

    /**
     * Handle for button close click.
     * Resets the original content to state
     * Closes model
     */
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
                onRequestClose={() => {alert("EditNoteModal has been closed.")}}>

                <DefaultHeader title={"Edit Note"} toggleModal={toggleModal}/>
                <View style={noteEditMod.view}>
                    <Content>
                        <Form>

                            <View style={noteEditMod.view}>
                                <Item floatingLabel>
                                    <Label>
                                        Title
                                    </Label>
                                    <Input
                                        onChangeText={(tempTitle) => this.setState({tempTitle})}
                                        value={tempTitle}/>
                                </Item>
                            </View>

                            <View style={views.flex2}>
                                <Item floatingLabel>
                                    <Label>
                                        Content
                                    </Label>
                                    <Input
                                        onChangeText={(tempContent) => this.setState({tempContent})}
                                        value={tempContent}
                                        multiline={true}
                                        style={noteEditMod.inputCont}/>
                                </Item>
                            </View>

                        </Form>

                    </Content>
                </View>
                <View style={views.flex1}>
                    <Grid style={{backgroundColor:'red'}}>

                        <Col>
                            <View style={views.buttonView}>
                                <Button block
                                        onPress={this.handleButtonSaveClick}
                                        style={button.successColor}>
                                    <Text>
                                        Add
                                    </Text>
                                </Button>
                            </View>
                        </Col>

                        <Col>
                            <View style={views.buttonView}>
                                <Button block
                                        onPress={this.handleButtonClose}
                                        style={button.closeColor}>
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
