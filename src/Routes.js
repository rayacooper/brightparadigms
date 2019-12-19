import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from './Components/About/About Main/About';
import HomePage from './Components/HomePage/HomePage';
// import Contact from './Components/Contact/Contact'
import News from './Components/News/News';

export default (
    <Switch>
        <Route component={About} path='/about'/>
        <Route component={News} path='/news'/>
        <Route component={HomePage} path='/'/>
    </Switch>
)