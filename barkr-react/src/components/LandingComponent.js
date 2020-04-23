import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Landing(props) {

    const chosenDog=props.chosenDog;

    return(
        <div className="container h100vh border-0">
            
            <div className="row h12vh border-0">
                <div className="col-12">
                    <Link to="/dog-home">
                        <Button className="btn-warning text-dark"><h2>Meet {chosenDog.name} </h2></Button>
                    </Link>                    
                </div>
            </div>

            <div className="row h-75">
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

            <div className="row h12vh">
                <div className="col-12">
                    <Link to="/dog-home">
                        <Button className="btn-warning text-dark" ><h2>My Dog's Page</h2></Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Landing;