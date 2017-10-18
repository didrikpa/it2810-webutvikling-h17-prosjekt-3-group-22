import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

/**
 * This is an example Component made only to demonstrate React.
 * We keep it because we like to remember Ole Anders' live coding React course.
 */
export default class ExampleComponent extends Component {
    /**
     * This is the Component constructor.
     * @param {*} props The properties passed from the Component's parents
     */
    constructor (props) {
        /**
         * Call the Component standard constrctor with the properties
         */
        super(props)

        /**
         * Set the initial state of the Component.
         * This can also be done with the setInitialState() method of the standard Component class.
         */
        this.state = {
            foo: 'bar'
        }
    }

    /**
     * This is a method of this class.
     * We define them with ES6 arrow functions to escape needing to bind() the methods manually to this Component.
     */
    onClick = () => {
        /**
         * The setState() method of React Components is used to set the state correctly.
         * This is needed because React uses the state of the Component decide when it re-renders the Component.
         * Here we just use it to change the text from 'bar' to 'foo', which triggers an instant rerender of the Component.
         */
        this.setState({
            foo: 'foo'
        })
    }

    /**
     * This is the Components' render method. All React Components need this method.
     * The render method is called by React when the Component is mounted/displayed in the DOM in the browser.
     */
    render = () => {
        /**
         * Get the variables we need from the Component state when we render.
         */
        const { foo } = this.state

        /**
         * Get the variables we need from the Component properties when we render.
         */
        const { text } = this.props

        /**
         * The render method returns the JSX this Component renders
         */
        return (
            <div>
                { text }
                <Button onClick={ this.onClick }>
                    { foo }
                </Button>
            </div>
        )
    }
}
