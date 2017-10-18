import React, { Component } from 'react'
import { View,Content, Label, Grid, Col, Button, Text } from 'native-base';
import { Modal, StyleSheet } from 'react-native'
import DefaultHeader from './DefaultHeader'

export default class NewNoteModal extends Component {




    handleButtonCloseClick = () => {
        const { toggleModal } = this.props
        toggleModal()

    }

    handleButtonDeleteClick = () => {
        const { deleteFunction, object } = this.props
        deleteFunction(object)
        this.handleButtonCloseClick()


    }


    render() {
        const { isOpen, title, headerTitle } = this.props

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {alert("NewNoteModal has been closed.")}}>

                <DefaultHeader title={`Delete ${headerTitle}`} toggleModal={this.handleButtonCloseClick}/>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                            <Label style={{
                                fontSize:30,
                            }}>
                                Delete this {headerTitle}? {'\n'}
                            </Label>
                                <Label style={{fontSize:20, fontWeight:'bold', paddingTop:20}}>'{ title }'</Label>


                </View>
                <Grid>

                    <Col>
                        <View style={{position:'absolute',bottom:0, width:'100%'}}>
                            <Button
                                block
                                onPress={this.handleButtonDeleteClick}
                            style={{backgroundColor:'#db2828'}}>
                                <Text>Delete</Text>
                            </Button>
                        </View>
                    </Col>

                    <Col>
                        <View style={{position:'absolute',bottom:0, width:'100%'}}>
                            <Button
                                block
                                onPress={this.handleButtonCloseClick}
                                style={{backgroundColor:"#767676"}}>
                                <Text>
                                    Cancel
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
        width:'100%',
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
