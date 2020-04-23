import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';

function DogId(props) {
    const chosenDog=props.chosenDog;

    return(
        <>
            <div className="h-75" id="dog-card">
                <img id="dog-home-img" className="img-fluid d-sm-none" src={chosenDog.pictures[0].imageSm}></img>
                <img id="dog-home-img" className="img-fluid d-none d-sm-block d-md-none" src={chosenDog.pictures[0].imageMd}></img>
                <img id="dog-home-img" className="img-fluid d-none d-md-block" src={chosenDog.pictures[0].imageLg}></img>
            </div>
            <div className="bg-white h-25 text-left p-2">
                <p>{chosenDog.bio}</p>
            </div>
        </>
    )
} 

function HomeNavCol(props) {
    const chosenDog=props.chosenDog;
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
            <Link to="/care">
                <Button className="bg-danger home-nav-button">
                    <h2>Emergency Contacts</h2>
                </Button>
            </Link>
            <div className="py-3 home-nav-button">
                <h3 className="text-white">Share {chosenDog.name}</h3>
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
        </div>
    )
}


function DogHome (props) {

    const chosenDog=props.chosenDog;

    return(
        <>
            <Header pageName="Meet" dogName={chosenDog.name}/>                
            <div className="container h75vh">                    
                <div className="row h-100 overflow-auto">                        
                    <div className="col-12 col-md-8 mh-100 p-1">
                        <DogId chosenDog={chosenDog} />
                    </div>
                    <div className="d-none d-md-block col-md-4 p-0">
                        <HomeNavCol chosenDog={chosenDog} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DogHome;