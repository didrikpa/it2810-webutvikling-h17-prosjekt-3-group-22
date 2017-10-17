import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import moment from 'moment'
import { Button, Header, Modal, Input, Grid, Checkbox } from 'semantic-ui-react'

export default class CreateEvent extends Component {
    constructor (props) {
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
     * This method handles the input from the Description element and sets the Component state equal to it.
     * @param e The event that triggered the method.
     * @param value Value of the input field.
     */
    onChange = (e, {value}) => {
        this.setState({
            text: value
        })
    }

    /**
     * This method handles the change of the Date field and sets the Component state based on it.
     * @param e The event that triggered the method.
     * @param date Value of the Date field.
     */
    handleDate = (event, date) => {
        this.setState({date: date})
    }

    /**
     * This method handles the change of the Time field and sets the Component state based on it.
     * @param e The event that triggered the method.
     * @param time Value of the Time field.
     */
    handleTime = (event, time) => {
        this.setState({time: time})
    }

    /**
     * This method handles the change of the Location field and sets the Component state based on it.
     * @param e The event that triggered the method.
     * @param value Value of the Location field.
     */
    onLocationChange = (e, {value}) => {
        this.setState({
            where: value
        })
    }

    /**
     * This method is used to trigger opening this Modal.
     */
    handleOpen = () => {
        this.setState({ open: true })
    }

    /**
     * This method is used to trigger closing this Modal.
     */
    handleClose = () => {
        this.setState({ open: false })
    }

    /**
     * This method is used to gather the state on this Component trigger an updateEvent() method passed from the parent.
     * First it gathers the the needed variables from the Component state.
     * Then it collects the Date and Time into a single Moment.js object.
     * If the Description is not empty and the time exists, the updateEvent() method from the parent is called.
     * The State of this Component is then cleared from the modal because the Event is created.
     * Then the Modal is closed.
     */
    createEvent = () => {
        const { text, where, date, time } = this.state
        let d2 = moment(moment(date).format('YYYY-MM-DD') + ' ' + moment(time).format('HH:mm'))
        if (text !== '' && d2) {
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

    render () {
        const { text, where, open } = this.state
        return (
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
