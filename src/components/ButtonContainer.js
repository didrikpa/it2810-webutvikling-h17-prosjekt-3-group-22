import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class ButtonExampleButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      foo: 'bar'
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      foo: 'foo'
    })
  }

  render() {
    const { foo } = this.state
    const { text } = this.props
    return(
      <div>
      { text }
        <Button onClick={this.onClick}>
          {foo}
        </Button>
      </div>
    )
  }
}
