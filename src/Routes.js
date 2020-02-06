import React from 'react';
import {Switch, Route} from 'react-router-dom'

import About from './Components/About/About';
import HomePage from './Components/HomePage/HomePage';
import Projects from './Components/Projects/Projects';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import ProjectX from './Components/Projects/AllProjects/Project X';

export default (
    <Switch>
        <Route component={About} path='/about'/>
        <Route component={ProjectX} path='/portfolio/projectx'/>
        <Route component={Projects} path='/portfolio'/>
        <Route component={WhoWeAre} path='/whoweare'/>
        <Route component={HomePage} path='/'/>
    </Switch>
)