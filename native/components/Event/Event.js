import React, { Component } from 'react'
import { List, ListItem, Left, Right, Body, Text, Content} from 'native-base';
import { StyleSheet, Style } from 'react-native';

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
            <List>
                {isNew ?
                    <ListItem itemDivider>
                        <Text>{moment(event.date).format('dddd')}
                        {moment(event.date).format('Do')}</Text>
                    </ListItem> : undefined
                }
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
            </List>
        )
    }
}
