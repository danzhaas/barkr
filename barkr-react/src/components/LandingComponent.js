import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { DogChooserModal } from './ChooseDogModalComponent';
import Consumer from "./configContext";


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state= {
            modal: false,
            popover: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.togglePopover = this.togglePopover.bind(this);
    };

    toggleModal() { 
        this.setState({modal: !this.state.modal}) 
    };
    togglePopover() { 
        this.setState({popover: !this.state.popover}) 
    };

    render() {
        const modal=this.state.modal;

        return(
            <div className="container h100vh">
                
                <div className="row h12vh border-0">
                    <div className="col-12 d-flex flex-column justify-content-center">
                        <Button className="btn-warning text-dark" onClick={this.toggleModal} ><h2>Find a Dog</h2></Button>
                        <Consumer>
                            {context => {
                                return(
                                    <DogChooserModal modal={modal} toggleModal={this.toggleModal} chooseDog={context.chooseDog} dogs={context.dogs}/>
                                )
                            }}
                        </Consumer>
                    </div>
                </div>

                <div className="row h-75">
                    <div className="col-12 h-100">
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
                    <div className="col-12 d-flex flex-column justify-content-center">
                        <Button className="btn-warning text-dark" id="Popover" ><h2>Add Your Dog</h2></Button>
                        <Popover placement="top" isOpen={this.state.popover} target="Popover" toggle={this.togglePopover}>
                            <PopoverHeader>Coming soon</PopoverHeader>
                            <PopoverBody>In development - check back in July 2020</PopoverBody>
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;