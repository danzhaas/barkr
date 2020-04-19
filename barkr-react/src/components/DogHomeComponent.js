import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Link} from 'react-router-dom';
import Header from './HeaderComponent';

class DogHome extends Component {

    render() {

        return(
            <>
                <Header pageName="Meet" dogName="Suede"/>
                <div className="container h75vh">
                    <div className="row h-100">

                        <div className="col-12 col-md-8 mh-100 p-1">
                            <div className="h-75" id="dog-card">
                                <img id="dog-home-img" className="img-fluid d-sm-none" src="assets/img/suede-on-bed.jpg"></img>
                                <img id="dog-home-img" className="img-fluid d-none d-sm-block d-md-none" src="assets/img/suede-on-bed-800x800.jpg"></img>
                                <img id="dog-home-img" className="img-fluid d-none d-md-block" src="assets/img/suede-on-bed-1000x800.jpg"></img>
                            </div>
                            <div className="bg-white h-25">
                                <p>Hi there, I'm Suede! I am a 4 1/2 year old girl.  I love meeting people, eating treats, and going to the dog park.  Outside the park I need space from other dogs.  I know a lot of tricks, so go to the Talk to Me page to see all the commands I know. Then let's talk!</p>
                            </div>
                        </div>

                        <div id="home-nav-col" className="col-md-4 d-flex flex-column h-100 p-1">
                            <Link to="/talk">
                                <Button className="nav-link d-flex flex-row home-nav-button bg-warning" >
                                    <i className="nav-icon fa fa-comment fa-2x"></i>
                                    <h2>&nbsp;Talk to Me</h2>
                                </Button>
                            </Link>
                            <Link to="/adventure">
                                <Button className="nav-link d-flex flex-row home-nav-button bg-warning" >
                                    <i className="nav-icon fa fa-tree fa-2x align-self-center"></i>
                                    <h2>&nbsp;Let's Adventure</h2>
                                </Button>
                            </Link>
                            <Link to="/care">
                                <Button className="nav-link d-flex flex-row home-nav-button bg-warning" >
                                    <i className="nav-icon fa fa-heart fa-2x"></i>
                                    <h2>&nbsp;Care for Me</h2>
                                </Button>
                            </Link>
                            <Link to="/care">
                                <Button className="bg-danger home-nav-button">
                                    <h2>Emergency Contacts</h2>
                                </Button>
                            </Link>
                            <div className="py-3 home-nav-button">
                                <h3 className="text-white">Share this dog</h3>
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

                    </div>
                </div>
            </>
        )
    }
}

export default DogHome;