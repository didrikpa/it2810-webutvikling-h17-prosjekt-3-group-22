import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import ButtonContainer from './components/ButtonContainer'
import TodoContainer from './components/Todo/TodoContainer'

const App = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={TodoContainer} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default App
