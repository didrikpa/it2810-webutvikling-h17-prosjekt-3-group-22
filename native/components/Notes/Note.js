import React, { Component } from 'react'
import { Button, Left, Body, Right, Icon, Content, View, Text, Segment } from 'native-base';

export default class Note extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const segmentStyle = {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      flex: 1,
      padding:10
    }

    return (
      <Content>
        <Segment>
          <View style={segmentStyle}>

            <Left>
              <Text>Title</Text>
            </Left>

            <Body>
              <Text>Date</Text>
            </Body>

            <Right>
              <Button iconLeft transparent primary>
                <Icon name='trash'
                style={{color:'red'}}/>

              </Button>
            </Right>
          </View>
        </Segment>

        <Segment>
          <View style={segmentStyle}>

            <Left>
              <Text>Title</Text>
            </Left>

            <Body>
            <Text>Date</Text>
            </Body>

            <Right>
              <Button iconLeft transparent primary>
                <Icon name='trash'
                      style={{color:'red'}}/>

              </Button>
            </Right>
          </View>
        </Segment>

        <Segment>
          <View style={segmentStyle}>

            <Left>
              <Text>Title</Text>
            </Left>

            <Body>
            <Text>Date</Text>
            </Body>

            <Right>
              <Button iconLeft transparent primary>
                <Icon name='trash'
                      style={{color:'red'}}/>

              </Button>
            </Right>
          </View>
        </Segment>
      </Content>
    )
  }
}
