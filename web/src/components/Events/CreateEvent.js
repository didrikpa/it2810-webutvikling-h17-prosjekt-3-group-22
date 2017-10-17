import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

import moment from 'moment'

import { Divider, Button, Header, Modal, Input, Container, Grid, Checkbox } from 'semantic-ui-react'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            where: '',
            open: false,
            date: null,
            time: null
        }
    }

    /**
     * Changing the text when typing
     */
    onChange = (e, {value}) => {
        this.setState({
            text: value
        })
    }

    /**
     * Changing the date when the date is changed
     */
    handleDate = (event, date) => {
        this.setState({date: date})
    }

    /**
     * Changing the time when the time is changed
     */
    handleTime = (event, time) => {
        this.setState({time: time})
    }

    /**
     * Changing the location when "where" is changed
     */
    onLocationChange = (e, {value}) => {
        this.setState({
            where: value
        })
    }

    /**
     * Handle opening the modal for creating the event
     */
    handleOpen = () => {
        this.setState({
            open: true
        }, () => {
            console.log('open')
        })
    }

    /**
     * Handle closing the modal for creating the event
     */
    handleClose = () => {
        this.setState({
            open: false
        }, () => {
          console.log('closed')
      } )
    }

    /**
     * Calls the updateEvent function in EventContainer, clears all input fields if
     * the text and date fields are filled in and then closes the modal.
     */
    createEvent = () =>  {
        const { text, where, date, time } = this.state
        let d2 = moment(moment(date).format('YYYY-MM-DD') + ' ' + moment(time).format('HH:mm'))
        if(text !== '' && d2) {
           this.props.updateEvent(text, where, d2)
           this.setState({
               text: '',
               where: '',
               date: null,
               time: null
           })
         }
         this.handleClose()
     }

    render() {
        const { text, where, open, date, time } = this.state
        return(
            <div>
                <Modal onClose={this.handleClose} closeOnDimmerClick open={open} trigger={
                  <Button attached="top" color='blue' onClick={this.handleOpen}>Add event</Button>
                }>
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
                                <Input action fluid placeholder='Where...' onChange={this.onLocationChange} value={where}>
                                    <input />
                                </Input>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header>Time</Header>

                                    /**
                                     * Displays the datepicker importet from material-ui
                                     */
                                    <DatePicker onChange={this.handleDate} hintText="Date of event" />
                                    <TimePicker onChange={this.handleTime} format={'24hr'} hintText="Time of event" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' icon="add" labelPosition='left' content='Create' onClick={this.createEvent}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
