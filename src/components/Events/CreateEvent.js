import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

import { Divider, Button, Header, Modal, Input, Container, Grid, Checkbox } from 'semantic-ui-react'
/*import DatePicker from 'react-datepicker';*/

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: null,
            time: null,
            text: ''
        }

        this.onChange = this.onChange.bind(this)
        this.handleDate = this.handleDate.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this)
        this.handleTime = this.handleTime.bind(this);
    }

    onChange(e, {value}) {
        this.setState({
            text: value
        })
    }
    handleDate(event, date){
        this.setState({date: date})
    }
    handleTime(event, time){
        this.setState({time: time})
    }

    onButtonClick() {
        const { text } = this.state
        if(text !== '') {
            this.props.onButtonClick(text)
            this.setState({
                text: ''
            })
        }
    }

    render() {
        const { text } = this.state
        return(
            <div>
                <Modal trigger={<Button color='blue'>Add event</Button>}>
                    <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={13}>
                                <Header>Description</Header>
                                <Input action fluid placeholder='Description...' onChange={this.onChange} value={text}>
                                    <input />
                                </Input>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header>Alert me</Header>
                                <Checkbox defaultChecked />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header>Where</Header>
                                <Input action fluid placeholder='Where...'/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header>Time</Header>

                                    <DatePicker onChange={this.handleDate} value ={this.state.date} hintText="Date to be completed by" />
                                    <TimePicker onChange={this.handleTime} value={this.state.time} format={'24hr'} hintText="Time to be completed by" />

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider hidden/>
                    <Button color='blue' onClick={this.onButtonClick}>Create event</Button>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}
