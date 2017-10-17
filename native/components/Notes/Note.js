import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Left, Body, Right, Icon, Content, View, Text, ListItem, Item,Grid ,Col,Row } from 'native-base';
import moment from 'moment'
import EditNoteModal from './EditNoteModal'

export default class Note extends Component {
  constructor(props) {
      super(props)

    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
      date: this.props.note.date,
      editModalOpen:false,
    }
  }

  handleDelete = () => {
      const { note, deleteItem } = this.props
      console.log("fdhsfjsdlfjal")
      deleteItem(note)
    }

  toggleEditModal = () => {
    this.setState({
      editModalOpen: !this.state.editModalOpen
    })
  }

  render() {
    const { note, onButtonSaveClick } = this.props
    const { editModalOpen } = this.state


    const segmentStyle = {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      flex: 1,
      padding:10
    }

    return (
        <ListItem>
            <Grid>
            <Col size={80}>
              <Row>
              <Text style={styles.titleStyle}>{note.title}</Text>
              </Row>
              <Row>
              <Text style={styles.dateStyle}>{moment(note.date).calendar()}</Text>
              </Row>
            </Col>


            <Col size={25}>
              <Row>
              <Button
                onPress={this.handleDelete}
                style={{backgroundColor:"#db2828", paddingRight:4}}>
                <Icon
                  name='close'
                  style={{color:'white'}}/>
              </Button>

              <Button
                      onPress={this.toggleEditModal}
                      style={{backgroundColor:'#767676',marginLeft:-1}}>
                <Icon name='create' style={{color:'white'}}/>
              </Button>
              </Row>
            </Col>
            </Grid>
          <EditNoteModal
            isOpen={editModalOpen}
            toggleModal={this.toggleEditModal}
            onButtonSaveClick={onButtonSaveClick}
            handleDelete={this.handleDelete}
            title={note.title}
            content={note.content}/>
        </ListItem>

    )
  }
}

const styles = StyleSheet.create({

  titleStyle: {
    fontSize:21,
  },

  dateStyle: {
    color:'#999999'
  }

})
