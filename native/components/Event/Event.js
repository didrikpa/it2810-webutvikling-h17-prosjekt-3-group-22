import React, { Component } from 'react'
import { ListItem, Left, Right, Body, Text} from 'native-base';

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

        const segmentStyle = {
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          flex: 1,
          padding:10
        }

        return(
            <ListItem>
                <Left>
                    <Text>{event.text}</Text>
                </Left>
                <Body>
                    <Text>{event.where}</Text>
                </Body>
                <Right>
                    <Text>{moment(event.date).format('HH:mm')}</Text>
                </Right>
            </ListItem>
        )
    }
}
