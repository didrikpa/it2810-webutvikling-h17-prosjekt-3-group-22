import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Modal, Text, View } from 'react-native';
import { Container, Header, Content, Button, Icon, Item, Input, Form, Grid,
  Col, H3 } from 'native-base';
import DefaultHeader from '../DefaultHeader'

import moment from 'moment'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)

        // init state
        this.state = {
            text: '',
            where: '',
            date: null
        }
    }

  /**
   * Updates the date on change
   * @param event
   * @param date
   */
    handleDate = (event, date) => {
        this.setState({date: date})
    }

  /**
   * Closes the createEventModal(this)
   */
  handleClose = () => {
        const{toggleModal} = this.props
        toggleModal()
    }

  /**
   * Creates a new event
   */
  createEvent = () =>  {
        const { text, where, date } = this.state
        if(text !== '' && where !=='' && date !==null){
          this.props.updateEvent(text, where, date)
          this.setState({
              text: '',
              where: '',
              date: null
          })
      }
    }

    render() {
        //Define constants
        const { text, where, open, date, time } = this.state
        const { toggleModal, isOpen } = this.props

        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal}}
            >
                <DefaultHeader title={"New event"} toggleModal={toggleModal}/>
                <View style={{flex:1}}>
                <Form>
                    <H3>Event name:</H3>
                   <Item>
                     <Input
                        placeholder="Description"
                        onChangeText={(text) => this.setState({text})}
                        value={text} />
                   </Item>
                    <H3>Where is the event:</H3>
                   <Item last>
                     <Input
                        placeholder="Where"
                        onChangeText={(where) => this.setState({where})}
                        value={where} />
                   </Item>

                </Form>
                    <H3>At what time is the event starting:</H3>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="datetime"
                    placeholder="select date"
                    format="YYYY-MM-DD HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>

                <View style={{flex:1}}>
                    <Grid>
                        <Col>
                            <View style={{
                                position:'absolute',
                                bottom:0,
                                width:'100%'}}>
                                <Button block
                                        success
                                        onPress={this.createEvent}
                                        style={{backgroundColor:"#21BA45"}}>
                                    <Text>
                                        Add
                                    </Text>
                                </Button>
                            </View>
                        </Col>

                        <Col>
                            <View style={{
                                position:'absolute',
                                bottom:0,
                                width:'100%'}}>
                                <Button block
                                        onPress={this.handleClose}
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
