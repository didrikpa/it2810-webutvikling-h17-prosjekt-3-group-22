import React, { Component } from 'react'
import { Input, Button, Item, Content, Text } from 'native-base'
import moment from 'moment'

export default class TodoInput extends Component<{}> {
    constructor(props) {
        super(props)

        this.state = {
            text: '',

        }

        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick() {
        const { text } = this.state
        if(text !== '') {
            this.props.onButtonClick(text)
            this.setState({
                text: '',
                date: moment()

            })
        }
    }

    render() {
        const { text } = this.state
        return(
            <Content>
                <Item regular>
                    <Input placeholder='Write your Todo...' onChangeText={(text) => this.setState({text: text})}
                           value={text}/>
                <Button onPress={this.onButtonClick}>
                    <Text>New ToDO</Text>
                </Button>
                </Item>
            </Content>
        )
    }
}