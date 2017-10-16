import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View, Icon } from 'native-base';
import moment from 'moment'

export default class EventContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            month: moment()
        }
    }


    render() {
      const { events, month } = this.state
      return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <View>
              <Button light>
                <Icon name='arrow-back' />
                <Text>Last</Text>
              </Button>
            </View>
            <View>
              <Text style={{ fontSize: 23}}>{month.format('MMMM')}</Text>
            </View>
            <View>
              <Button light>
                <Text>Next</Text>
                <Icon name='arrow-forward' />
              </Button>
            </View>
        </View>
      );
    }
}
