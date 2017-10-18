import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content, Title, Icon , Button, Form,
  Grid, Col } from 'native-base';
import { Modal, StyleSheet } from 'react-native'
import DefaultHeader from '../DefaultHeader'

export default class ViewNoteModal extends Component {


    render() {
        const { toggleModal, isOpen, title, content, date } = this.props

        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {alert("EditNoteModal has been closed.")}}>

                <DefaultHeader title={title} toggleModal={toggleModal}/>
                <View style={{flex:1}}>
                    <Content>
                        <Grid>

                            <Col size={75}>
                                <View style={{flex:1}}>
                                    <Text style={styles.titleStyle}>
                                        {title}
                                    </Text>
                                </View>
                            </Col>

                            <Col size={26}>
                                <View style={{flex:1}}>
                                    <Text style={styles.dateStyle}>
                                        {date}

                                        </Text>
                                </View>
                            </Col>
                        </Grid>

                        <View
                            style={styles.borderStyle}/>

                        <View style={{flex:2}}>
                            <Text style={styles.contentStyle}>
                                {content}
                            </Text>
                        </View>

                    </Content>
                </View>

                <View style={{position:'absolute',bottom:0, width:'100%'}}>
                    <Button
                        block
                        onPress={toggleModal}
                        style={{backgroundColor:'#767676'}}>
                        <Text>Close</Text>
                    </Button>
                </View>

            </Modal>
        )
    }
}


const styles = StyleSheet.create({

    contentStyle: {
        fontSize:18,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:10,
        paddingBottom:50,
    },

    dateStyle: {
        fontSize:12,
        color:'#999999',
        paddingRight:25,
        paddingTop:10,
        paddingBottom:10,
    },

    titleStyle:{
        fontWeight:'bold',
        fontSize:24,
        paddingLeft:25,
        paddingBottom:10,
        paddingTop:10,

    },

    borderStyle:{
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
    }
})
