import React, { Component } from 'react'
import { Container, Header, Content, Left ,Right, Title, Body, Icon, Button } from 'native-base';

export default class HeaderMenu extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { title, toggleModal } = this.props

    return (
      <Content>
        <Header>
          <Left>
            <Button transparent >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>{title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={toggleModal}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
      </Content>
    )
  }
}
