import React, { Component } from 'react'
import { Container, Header, Content, Button, Icon, Item, Input, Form } from 'native-base';

import moment from 'moment'
/*
import DeleteModal from '../DeleteModal'
import EditModal from './EditModal'*/

export default class Event extends Component {
    constructor(props) {
        super(props)
    }
    
    /*
    handleEdit = (text, where, date) => {
        this.props.updateEvent(text, where, date)
    }*/

    render() {
        const { event, isNew } = this.props
        return(
            <Content>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <View>
                      <Text>{event.text}</Text>
                    </View>
                    <View>
                      <Text>{event.where}</Text>
                    </View>
                </View>
            </Content>
        )
    }
}
