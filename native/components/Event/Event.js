import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Left, Right, Body, Text, Button, Icon, Grid, Col, Row} from 'native-base';

import moment from 'moment'

import EditModal from './EditModal'
import DeleteModal from '../DeleteModal'


export default class Event extends Component {
    constructor(props) {
        super(props)

        //init state
        this.state ={
            editModalOpen: false,
            deleteModalOpen:false
        }
    }

  /**
   * Calls the delete function in the EventContainer
   */
  handleDelete = () => {
        const { event, deleteItem } = this.props
        deleteItem(event)
    }

  /**
   * Opens and closes the editEventModal
   */
  toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }

    /**
     * Opens and closes the deleteModal
     */
    toggleDeleteModal = () => {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
        })
    }

    render() {
      //define constants
        const { event, isNew, updateEvent, deleteItem } = this.props
        const { editModalOpen, deleteModalOpen } = this.state

        return(
            <List style={{marginTop: 10}}>
                {isNew ?
                    <ListItem itemDivider>
                        <Text>
                        {moment(event.date).format('dddd')} {moment(event.date).format('Do')}
                        </Text>
                    </ListItem> : undefined
                }
                <ListItem>
                    <Grid>
                          <Col size={80}>
                              <Row>
                                  <Left>
                                      <Text style={styles.titleStyle}>
                                          {event.text}
                                      </Text>
                                  </Left>
                                  <Body>
                                      <Text style={styles.whereStyle}>
                                          {event.where}
                                      </Text>
                                      <Text style={styles.dateStyle}>
                                          {moment(event.date).format('HH:mm')}
                                      </Text>
                                  </Body>
                              </Row>
                          </Col>

                          <Col size={25}>
                              <Row>
                              <Button
                                  onPress={this.toggleDeleteModal}
                                  style={{backgroundColor:"#db2828", paddingRight:4}}>
                                  <Icon name='close' style={{color:'white'}}/>
                              </Button>
                              <Button
                                  onPress={this.toggleEditModal}
                                  style={{
                                      backgroundColor:'#767676',
                                      marginLeft:-1}}>
                                  <Icon name='create' style={{color:'white'}}/>
                              </Button>
                              </Row>
                        </Col>
                    </Grid>
                    <EditModal
                        isOpen={editModalOpen}
                        toggleModal={this.toggleEditModal}
                        updateEvent={updateEvent}
                        handleDelete={this.handleDelete}
                        text={event.text}
                        date={event.date}
                        where={event.where}/>

                    <DeleteModal
                        isOpen={deleteModalOpen}
                        toggleModal={this.toggleDeleteModal}
                        deleteFunction={deleteItem}
                        object={event}
                        title={event.text}
                        headerTitle={"event"}
                    />

                </ListItem>
            </List>
        )
    }
}

const styles = StyleSheet.create({

    titleStyle: {
        fontSize:19,
    },

    whereStyle: {
        fontSize:16,
    },

    dateStyle: {
        color:'#999999',
    }

})
