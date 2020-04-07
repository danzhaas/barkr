import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { DOGS } from '../shared/dogs';
import LandingComponent from './LandingComponent';
import DogHomeComponent from './DogHomeComponent';
import TalkComponent from './TalkComponent';
import AdventureComponent from './AdventureComponent';
import CareComponent from './CareComponent';

//insert DOGS data here

class Main extends Component {
    
    render() {
        
        return (
            <Switch>
                <Route path='/landing' component={LandingComponent} />
                <Route exact path='/dog-home' component={DogHomeComponent} />
                <Route exact path='/talk' component={TalkComponent} />
                <Route exact path='/adventure' component={AdventureComponent} />
                <Route exact path='/care' component={CareComponent} />
                <Redirect to='/landing' />
            </Switch>
        )
    }
}

export default Main;