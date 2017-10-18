import React, { Component } from 'react'
import { View,Content, Label, Grid, Col, Button, Text } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from './DefaultHeader'

export default class DeleteModal extends Component {

    /**
     * Handle for close button.
     * Closes modal
     */
    handleButtonCloseClick = () => {
        const { toggleModal } = this.props
        toggleModal()
    }

    /**
     * Handle for delete button.
     * Deletes given object and closes modal
     */
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
                onRequestClose={() => {alert("DeleteModal has been closed.")}}>

                <DefaultHeader title={`Delete ${headerTitle}`} toggleModal={this.handleButtonCloseClick}/>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>

                            <Label style={{fontSize:30,}}>
                                Delete this {headerTitle}? {'\n'}
                            </Label>

                    <Label style={{fontSize:20, fontWeight:'bold', paddingTop:20}}>
                        '{ title }'
                    </Label>
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
