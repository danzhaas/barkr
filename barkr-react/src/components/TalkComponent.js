import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Header from './HeaderComponent';
import COMMANDS from '../shared/commands'; 

function CommandCard(props) {
    
    return (
        <Card key={props.command.id} className="col-5 mt-5 pt-3">
            <CardImg src={props.command.image} alt={props.command.name} />
            <CardBody> 
                <CardTitle><strong>"{props.command.name}"</strong></CardTitle>
                <CardText>{props.command.description}</CardText>
            </CardBody>
        </Card>
    )
};    

class Talk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commands: COMMANDS,
        }
    };

    render() {

        return (
            <>
                <Header pageName="Talk to Me" />
                <div className="container overflow-scroll">                    
                    <div className="row">
                        <div class="col-12 d-flex flex-wrap justify-content-around">
                            <CommandCard command={this.state.commands[0]}/>
                            <CommandCard command={this.state.commands[1]}/>
                            <CommandCard command={this.state.commands[2]}/>
                            <CommandCard command={this.state.commands[3]}/>
                            <CommandCard command={this.state.commands[4]}/>
                            <CommandCard command={this.state.commands[5]}/>
                            <CommandCard command={this.state.commands[6]}/>
                            <CommandCard command={this.state.commands[7]}/>
                            <CommandCard command={this.state.commands[8]}/>
                            <CommandCard command={this.state.commands[9]}/>
                            <CommandCard command={this.state.commands[10]}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Talk;