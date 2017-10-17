import React, { Component } from 'react'
import { Button, Left, Body, Right, Icon, Content, View, Text, ListItem, Item } from 'native-base';

export default class Note extends Component {
  constructor(props){
    super(props)


    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
      date: this.props.note.date
    }
  }



  handleDelete = () => {
      const { note, deleteItem } = this.props
      console.log("fdhsfjsdlfjal")
      deleteItem(note)
    }

  render() {
    const { note } = this.props
    const { title, content, date } = this.state


    const segmentStyle = {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      flex: 1,
      padding:10
    }

    return (
        <ListItem>

            <Left>
              <Text>{note.title}</Text>
            </Left>

            <Body>
              <Text>{note.content}</Text>
            </Body>

            <Right>
              <Button
                iconLeft
                primary
                transparent
                onPress={this.handleDelete}
              >
                <Icon
                  name='trash'
                  style={{color:'red'}}

                />

              </Button>
            </Right>
        </ListItem>

    )
  }
}
