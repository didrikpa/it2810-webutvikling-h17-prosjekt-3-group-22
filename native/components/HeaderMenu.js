import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Left ,Right, Title, Body, Icon, Button, Header } from 'native-base';
import { Actions } from 'react-native-router-flux'


export default class HeaderMenu extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { title } = this.props

    return (
      <Content>
        <Header toolbarDefaultBg="black">
          <Left style={{flex:1}}>
            <Button transparent >
              <Icon name='arrow-back' onPress={ Actions.home }  style={styles.icon}/>
            </Button>
          </Left>
          <Body style={{flex:1}}>
            <Title>{title}</Title>
          </Body>
            <Right style={{flex:1}}>
            </Right>
        </Header>
      </Content>
    )
  }
}


const styles = StyleSheet.create({
    icon: {
        color: "white"
    },

})
