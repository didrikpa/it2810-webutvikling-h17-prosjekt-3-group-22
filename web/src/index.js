import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

/**
 * Get the 'root' element from index.html.
 * This is where React will render.
 */
const rootEl = document.getElementById('root')

/**
 * Define render() as a function.
 * This is needed because of the hot-reloading.
 * @param {React.Component} Component The root Component of the app.
 */
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    )
}

/**
 * Render the app the usual way when the file is run.
 */
render(App)

/**
 * If hot-reloading is enabled, then Fetch the edited ./App Component and render it.
 */
if (module.hot) module.hot.accept('./App', () => render(App))
