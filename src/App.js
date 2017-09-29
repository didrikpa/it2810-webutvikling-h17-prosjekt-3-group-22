import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import ButtonContainer from './components/ButtonContainer'
import TodoContainer from './components/Todo/TodoContainer'
import NoteContainer from './components/Notes/NoteContainer'
import HomeContainer from './components/Home/HomeContainer'
import EventContainer from './components/Events/EventContainer'

const App = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomeContainer} />
                <Route path='/todos' component={TodoContainer} />
                <Route path='/notes' component={NoteContainer} />
                <Route path='/events' component={EventContainer} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default App
