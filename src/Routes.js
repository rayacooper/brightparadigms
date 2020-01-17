import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from './Components/About/About Main/About';
import HomePage from './Components/HomePage/HomePage';
import Projects from './Components/Projects/Projects';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';

export default (
    <Switch>
        <Route component={About} path='/about'/>
        <Route component={Projects} path='/projects'/>
        <Route component={WhoWeAre} path='/whoweare'/>
        <Route component={HomePage} path='/'/>
    </Switch>
)