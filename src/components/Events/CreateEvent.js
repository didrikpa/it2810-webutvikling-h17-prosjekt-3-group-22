import React, { Component } from 'react'
import { Divider, Button, Header, Modal, Input, Container, Grid, Checkbox } from 'semantic-ui-react'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Modal trigger={<Button color='blue'>Create event</Button>}>
                    <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={13}>
                            <Header>Description</Header>
                                <Input action fluid placeholder='Description...'/>
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
                                <Input action fluid placeholder='Time...'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider hidden/>
                    <Button color='blue'>Create event</Button>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}
