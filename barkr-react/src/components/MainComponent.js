import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LandingComponent from './LandingComponent';
import DogHomeComponent from './DogHomeComponent';
import TalkComponent from './TalkComponent';
import AdventureComponent from './AdventureComponent';
import CareComponent from './CareComponent';
import { DOGS } from '../shared/dogs';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogId: 0
        }
    };

    render() {
        
        const chosenDog=DOGS[this.state.dogId];
        
        return (
            <Switch>
                <Route path='/landing' render={() => <LandingComponent chosenDog={chosenDog} />} />
                <Route exact path='/dog-home' render={() => <DogHomeComponent chosenDog={chosenDog} />} />
        <Route exact path='/talk' render={() => <TalkComponent chosenDog={chosenDog} />} />
                <Route exact path='/adventure' render={() => <AdventureComponent chosenDog={chosenDog} />} />
                <Route exact path='/care' render={() => <CareComponent chosenDog={chosenDog}/>} />
                <Redirect to='/landing' />
            </Switch>
        )
    }
}

export default Main;