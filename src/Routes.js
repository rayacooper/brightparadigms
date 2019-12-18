import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from './Components/About/About';
import HomePage from './Components/HomePage/HomePage';
import Contact from './Components/Contact/Contact'

export default (
    <Switch>
        <Route component={About} path='/about'/>
        <Route component={Contact} path='/contact'/>
        <Route component={HomePage} path='/'/>
    </Switch>
)