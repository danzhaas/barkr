import React, { useState, Component } from 'react';
import { Button, Nav, Navbar, Collapse, NavItem, NavbarToggler, NavbarBrand, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { DogChooserModal } from './ChooseDogModalComponent';
import Consumer from "./configContext";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            navCollapsed: true
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    };

    toggleNavbar() {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    };

    toggleModal() {
        this.setState({ modal: !this.state.modal })
    };

    render() {

        return (
            <Consumer>
                {context => {
                    return (
                        <div className="container sticky-top bg-warning border-bottom-0">
                            <div className="row bg-warning ">
                                <Navbar className="col-12" expand="md" >
                                    {/* <Button className="d-none d-md-flex flex-row align-items-center w-auto bg-warning px-3 border-0" onClick={this.toggleModal} >
                                        <i className="fa fa-dog fa-2x text-danger"></i>
                                        <i className="fa fa-dog fa-2x text-danger"></i>
                                    </Button> */}
                                    <DogChooserModal modal={this.state.modal} toggleModal={this.toggleModal} chooseDog={context.chooseDog} dogs={context.dogs} />
                                    <NavbarBrand className="d-flex flex-row align-items-center" href="/landing">
                                        <i id="paw" className="fa fa-paw fa-3x text-danger"></i>
                                        <h1 className="display-4 text-danger">Barkr</h1>
                                    </NavbarBrand>
                                    <NavbarToggler className="text-danger" onClick={this.toggleNavbar}>
                                        <i className="fa fa-bars fa-3x"></i>
                                    </NavbarToggler>
                                    <Collapse isOpen={!this.state.navCollapsed} navbar>
                                        <Nav className="mr-auto" navbar>
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row" to="/dog-home">
                                                    <i className="nav-icon fa fa-home fa-2x"></i>
                                                    <h5>This Dog's Page</h5>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row" to="/talk">
                                                    <i className="nav-icon fa fa-comment fa-2x"></i>
                                                    <h5>Talk to Me</h5>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row" to="/adventure">
                                                    <i className="nav-icon fa fa-tree fa-2x align-self-center"></i>
                                                    <h5>Adventure with Me</h5>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row" to="/care">
                                                    <i className="nav-icon fa fa-heart fa-2x"></i>
                                                    <h5>Care for Me</h5>
                                                </NavLink>
                                            </NavItem>
                                            <DropdownItem divider className="d-block d-md-none" />
                                            <NavItem >
                                                <a className="nav-link d-flex flex-row p-md-2" onClick={this.toggleModal} >
                                                    <i className="fa fa-dog fa-2x text-danger "></i>
                                                    <h5 className="text-danger">Choose Another Dog</h5>
                                                </a>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>
                            <div className="row border-0 bg-warning pt-1">
                                <div className="col-12">
                                    <h1 className="display-4 mb-0">{this.props.pageName}&nbsp;<span className="text-primary">{this.props.dogName}</span></h1>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Header;