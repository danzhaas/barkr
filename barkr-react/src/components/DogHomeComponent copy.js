import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Card, CardText, CardBody, CardHeader, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import Consumer from "./configContext";


function DogId (props) {
    const chosenDog=props.chosenDog;
    return(
        <Card id="dog-card" className="h-100" >
            <CardImg id="dog-home-img" src={chosenDog.pic.filter(pic => pic.type==="profilePic")[0].img}  />
            <CardBody className="p-2 p-md-3" >
                <CardText className="text-left">
                    {chosenDog.bio}
                </CardText>
            </CardBody>
        </Card>
    )
} 

function HomeNavCol(props) {
    
    const chosenDog=props.chosenDog;
    const toggle = props.toggle;

    return(
        <div id="home-nav-col" className="d-flex flex-column h-100 p-1" >
            <Link to="/talk">
                <Button className="nav-link d-flex flex-row justify-content-center home-nav-button bg-warning" >
                    <i className="nav-icon fa fa-comment fa-2x"></i>
                    <h2>&nbsp;Talk to {chosenDog.name}</h2>
                </Button>
            </Link>
            <Link to="/adventure">
                <Button className="nav-link d-flex flex-row justify-content-center home-nav-button bg-warning" >
                    <i className="nav-icon fa fa-tree fa-2x align-self-center"></i>
                    <h2>&nbsp;Let's Adventure</h2>
                </Button>
            </Link>
            <Link to="/care">
                <Button className="nav-link d-flex flex-row justify-content-center home-nav-button bg-warning" >
                    <i className="nav-icon fa fa-heart fa-2x"></i>
                    <h2>&nbsp;Care for {chosenDog.name}</h2>
                </Button>
            </Link>
            <div className="py-3 home-nav-button">
                <h3 className="text-danger">Share {chosenDog.name}</h3>
                <div id="social-media" className="d-flex flex-row justify-content-around align-items-center">
                    <Link to="instagram.com">
                        <i className="fa fa-instagram fa-3x"></i>
                    </Link>
                    <Link to="facebook.com">
                        <i className="fa fa-facebook fa-3x"></i>
                    </Link>
                    <Link to="twitter.com">
                        <i className="fa fa-twitter fa-3x"></i>
                    </Link>
                    <Link to="youtube.com">
                        <i className="fa fa-youtube fa-3x"></i>
                    </Link>
                </div>
            </div>
            <Button className="bg-danger home-nav-button" onClick={toggle}>
                <h2>Emergency Contacts</h2>
            </Button>
        </div>
    )
}


function EmergencyContactsModal (props) {
    const chosenDog=props.chosenDog;
    const modal=props.modal;
    const toggle = props.toggle;

    const renderContacts=chosenDog.contacts.map(entry => {
        return(
            <div key={entry.id}>
                <Card >
                    <CardHeader>{entry.tabName}</CardHeader>
                    <CardBody>
                        <CardText>
                            {entry.tabContent}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })

    return(
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} className="bg-danger">Emergency Contacts</ModalHeader>
            <ModalBody >
                {renderContacts}
            </ModalBody>
        </Modal>
    )
}


class DogHome extends Component {
    constructor(props) {
        super(props);
        this.state= {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() { 
        this.setState({modal: !this.state.modal}) 
    };

    render() {

        const modal=this.state.modal;
    
        return(            
            <Consumer>
                {context => {
                    return(
                        <div className="h-100">
                            <Header pageName="Meet" dogName={context.chosenDog.name} chooseDog={context.chooseDog} />         
                            <div className="container h-100">                    
                                <div className="row h-100 overflow-auto">                        
                                    <div className="col-12 col-md-8 mh-100 p-1">
                                        <DogId chosenDog={context.chosenDog} dogs={context.dogs} />
                                    </div>
                                    <div className="col-12 d-md-block col-md-4 p-0">
                                        <HomeNavCol chosenDog={context.chosenDog} toggle={this.toggle} />
                                        <EmergencyContactsModal chosenDog={context.chosenDog} modal={modal} toggle={this.toggle} />
                                    </div>
                                </div>
                            </div>   
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default DogHome;