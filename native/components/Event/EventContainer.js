import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Container, Header, Content, Button, Text, View, Icon } from 'native-base';
import moment from 'moment'

import Event from './Event'
import CreateEvent from './CreateEvent'

export default class EventContainer extends Component {
    constructor(props) {
        super(props)

        // init state
        this.state = {
            events: [],
            month: moment(),
            newModalOpen: false,
        }
    }

  /**
   * Loads event from localStorage
   */
  componentWillMount = async () => {
        let localEvents = JSON.parse(await AsyncStorage.getItem('events'))
        this.setState({
            events: localEvents || []
        })
    }

  /**
   * Sets the month variable one month back
   */
  decrementMonth = () => {
        this.setState({
            month: this.state.month.subtract(1, 'month')
        })
    }

  /**
   * Sets the month variable one month forward
   */
  incrementMonth = () => {
        this.setState({
            month: this.state.month.add(1, 'month')
        })
    }

  /**
   * Creates a event with the parameters given
   * @param text
   * @param where
   * @param date
   */
    updateEvent = (text, where, date) => {
        let { events } = this.state
        let event = {
            text: text,
            where: where,
            now: moment(),
            date: date,
        }
        events.push(event)
        this.updateState({
            events: events,
            newModalOpen: false
        })
    }

  /**
   * Delete given event
   * @param event
   */
  deleteItem = (event) => {
        let { events } = this.state
        const i = events.indexOf(event)
        if (i >= 0) {
            events.splice(i, 1)
            this.updateState({
                events: events
            })
        } else {
            console.error(`[EventContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

  /**
   * updates localStorage
   * @returns {Promise.<void>}
   */
  updateLocalStorage = async () => {
        const { events } = this.state
        await AsyncStorage.setItem('events', JSON.stringify(events))
    }

  /**
   * Updates the state of the program
   * @param state
   */
  updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

  /**
   * Shows or hides the createEventModal
   */
  toggleNewModal = () => {
      this.setState({
        newModalOpen: !this.state.newModalOpen
      })
    }

    render() {

    //Defines constants
      const { events, month, newModalOpen  } = this.state
      const { now } = this.props

      //Sorts the list of events
      let sortedEvents = events.filter((event) => moment(event.date).format('YYYY-MM') === month.format('YYYY-MM')).sort((b,a) => { return moment(b.date).unix() - moment(a.date).unix()})

      return (
        <Content>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 10
              }}>
                  <View>
                    <Button light onPress={this.decrementMonth}>
                      <Icon name='arrow-back' />
                      <Text>Last</Text>
                    </Button>
                  </View>
                  <View>
                    <Text style={{ fontSize: 23}}>{month.format('MMMM')}</Text>
                  </View>
                  <View>
                    <Button light onPress={this.incrementMonth}>
                      <Text>Next</Text>
                      <Icon name='arrow-forward' />
                    </Button>
                  </View>
              </View>

              <Button style={{marginTop: 30, marginLeft: 15, marginRight: 15}} block info onPress={this.toggleNewModal}>
                  <Text>Add event</Text>
              </Button>

              <CreateEvent
                  updateEvent={this.updateEvent}
                  toggleModal={this.toggleNewModal}
                  isOpen={newModalOpen}
              />

              {sortedEvents.map((event, index) => {
                  let n = true
                  if (index > 0) {
                      n = moment(event.date).format('YYYY-MM-DD') !== moment(sortedEvents[index-1].date).format('YYYY-MM-DD')
                  }
                  return (
                      <Event
                          key={event.now}
                          event={event}
                          deleteItem={this.deleteItem}
                          updateEvent={this.updateEvent}
                          isNew={n}
                      />
                  )
                })}
          </Content>
      )
    }
}
