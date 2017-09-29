import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import ButtonContainer from './components/ButtonContainer'
import TodoContainer from './components/Todo/TodoContainer'
import NoteContainer from './components/Notes/NoteContainer'

const App = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/todo' component={TodoContainer} />
                <Route exact path='/notes' component={NoteContainer} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default App
