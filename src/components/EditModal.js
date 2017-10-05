import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

import { Button, Modal, Icon, Grid, Header, Input, Checkbox } from 'semantic-ui-react'

class EditModal extends Component {
  constructor(props) {
      super(props)

      let event = {
          text: text,
          where: where,
          createdAt: moment(),
          date: moment(`${date}`).format('MMMM Do'),
          day: moment(`${date}`).format('dddd'),
          time: moment(`${time}`).format('h:mm a')
      }
  }

  onChange = (e, {value}) => {
      this.setState({
          text: value
      })
  }

  handleDate = (event, date) => {
      this.setState({date: date})
  }

  handleTime = (event, time) => {
      this.setState({time: time})
  }

  onLocationChange = (e, {value}) => {
      this.setState({
          where: value
      })
  }

  handleOpen = () => {
      this.setState({
          open: true
      }, () => {
          console.log('open')
      })
  }

  handleClose = () => {
      this.setState({
          open: false
      }, () => {
        console.log('closed')
    } )
  }

  onButtonClick = () =>  {
      const { text, where, date, time } = this.state
      if(/*text !== '' && time &&*/ date) {
          this.props.onButtonClick(text, where, date, time)
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
    const { text, where, open } = this.state
    const { handleEdit } = this.props
    return (
        <div>
            <Modal onClose={this.handleClose} closeOnDimmerClick open={open} trigger={
                <Icon size='large' color='blue' name='edit' onClick={this.handleOpen}/>
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

                                <DatePicker onChange={this.handleDate} value={this.state.date} hintText="Date to be completed by" />
                                <TimePicker onChange={this.handleTime} value={this.state.time} format={'24hr'} hintText="Time to be completed by" />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='blue' icon='edit' labelPosition='left' content='Edit' onClick={this.onButtonClick}/>
                </Modal.Actions>
            </Modal>
        </div>
    )
  }
}

export default EditModal
