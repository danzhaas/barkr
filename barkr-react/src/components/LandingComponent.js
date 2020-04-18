import React from 'react';
import {Button, Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';

function Landing() {
    
    return(
        <div className="container border-0">
            <div className="row h-25 border-0">
                <div className="col-12">
                    <Link to="/dog-home">
                        <Button className="btn-warning text-dark"><h2>Meet That Dog</h2></Button>
                    </Link>                    
                </div>
            </div>

            <div className="row h-50">
                <div className="col-12 h-100 py-3">
                    <div className="h-100 w-100 d-flex flex-column position-relative overflow-hidden">
                        <img id="landing-backsplash" className="img-fluid d-sm-none" src="assets/img/suede-on-bed-faded.jpg"></img>
                        <img id="landing-backsplash" className="img-fluid d-none d-sm-block d-md-none" src="assets/img/suede-on-bed-800x800-faded.jpg"></img>
                        <img id="landing-backsplash" className="img-fluid d-none d-md-block" src="assets/img/suede-on-bed-1000x800-faded.jpg"></img>
                        <div id="landing-logo" className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center align-self-start text-danger ">
                            <i id="paw" className="fa fa-paw"></i>
                            <h1>Barkr</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row h-25">
                <div className="col-12">
                    <Link to="/dog-home">
                        <Button className="btn-warning text-dark"><h2>My Dog's Page</h2></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;