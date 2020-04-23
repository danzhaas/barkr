import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Header from './HeaderComponent';

function CommandCards(props) {
    
    const chosenDog=props.chosenDog;

    const commandMap = chosenDog.commands.map(command => {
        return(
            <div key={command.id} className="col-5 mt-5 pt-3">
                <Card>
                    <CardImg src={command.image} alt={command.name} />
                    <CardBody> 
                        <CardTitle><strong>"{command.name}"</strong></CardTitle>
                        <CardText>{command.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <>
            {commandMap}
        </>
    )
};    

const Talk = (props) => {

    const chosenDog=props.chosenDog;

    return (
        <>
            <Header pageName="Talk to" dogName={chosenDog.name} />
            <div className="container">                    
                <div className="row h75vh overflow-auto">
                    <div className="col-12 d-flex flex-wrap justify-content-around">
                        <CommandCards chosenDog={chosenDog} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Talk;