import React, { Component } from 'react'
import { Input, Button, Item, Content, Text } from 'native-base'
import moment from 'moment'

export default class TodoInput extends Component<{}> {
    constructor(props) {
        super(props)

        //sets the state
        this.state = {
            text: '',

        }

    }

    //Calls the onButtonClick in the todoContainer, creates new todo
    onButtonClick = () => {
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
        //Defines constants
        const { text } = this.state
        return(
            <Content style={{padding:5}}>
                <Item regular>
                    <Input placeholder='Write your Todo...' onChangeText={(text) => this.setState({text: text})}
                           value={text}/>
                <Button onPress={this.onButtonClick} success>
                    <Text>New ToDO</Text>
                </Button>
                </Item>
            </Content>
        )
    }
}