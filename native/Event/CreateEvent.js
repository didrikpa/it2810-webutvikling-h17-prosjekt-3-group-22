import React, { Component } from 'react'
/*import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'*/
import { Modal, Text, View } from 'react-native';
import { Container, Header, Content, Button, Icon, Item, Input, Form } from 'native-base';

import moment from 'moment'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            where: '',
            date: null,
            time: null
        }
    }

    handleDate = (event, date) => {
        this.setState({date: date})
    }

    handleTime = (event, time) => {
        this.setState({time: time})
    }

    handleClose = () => {
        const{toggleModal} = this.props
        toggleModal()
    }

    createEvent = () =>  {
        const { text, where, date, time } = this.state
        let d2 = moment(moment(date).format('YYYY-MM-DD') + ' ' + moment(time).format('HH:mm'))
        if(text !== '' && d2) {
           this.props.updateEvent(text, where, d2)
           this.setState({
               text: '',
               where: '',
               date: null,
               time: null
           })
         }
     }

    render() {
        const { text, where, open, date, time } = this.state
        const { toggleModal, isOpen } = this.props
        return(
          <View style={{margin: 22}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <Form>
                   <Item>
                     <Input placeholder="Description" onChangeText={(text) => this.setState({text})} value={text} />
                   </Item>
                   <Item last>
                     <Input placeholder="Where" onChangeText={(where) => this.setState({where})} value={where} />
                   </Item>
                   <Item>
                     <Input placeholder="Date" onChangeText={(date) => this.setState({date})} value={date} />
                   </Item>
                   <Item>
                     <Input placeholder="Time" onChangeText={(time) => this.setState({time})} value={time} />
                   </Item>
                </Form>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                  <View>
                      <Button info style={{padding: 10, margin: 30}} onPress={this.createEvent}>
                          <Text>Create</Text>
                      </Button>
                  </View>
                  <View>
                      <Button danger style={{padding: 10, margin: 30}} onPress={this.handleClose}>
                          <Text>Close</Text>
                      </Button>
                  </View>
                </View>
            </Modal>
          </View>
        )
    }
}
