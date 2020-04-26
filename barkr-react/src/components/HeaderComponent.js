import React, { useState, Component } from 'react';
import { Button, Nav, Navbar, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { DogChooserModal } from './ChooseDogModalComponent';
import Consumer from "./configContext";

function NavComponent (props) {

    const [collapsed, setCollapsed] = useState(true);        
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar className="position-relative">
            <Button id="navbar-toggler" className="bg-warning text-danger header-button" onClick={toggleNavbar}>
                <i className="fa fa-bars fa-3x"></i>
            </Button>
            <Collapse isOpen={!collapsed} id="navbar" className="position-absolute text-right p-1 bg-warning" navbar>
                <Nav navbar>
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
                            <h5>Let's Adventure</h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link d-flex flex-row" to="/care">
                            <i className="nav-icon fa fa-heart fa-2x"></i>
                            <h5>Care for Me</h5>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            modal: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal() { 
        this.setState({modal: !this.state.modal}) 
    };

    render() {

        return (
            <div className="container sticky-top bg-warning border-0 p-0">
                <div className="row border-0 bg-warning h-auto">
                    <div className="col-12 d-flex flex-row justify-content-between align-content-center h-auto">
                        <Button className="d-flex flex-row align-items-center w-auto bg-warning header-button" onClick={this.toggleModal} >
                            <i className="fa fa-dog fa-2x text-danger"></i>
                            <i className="fa fa-dog fa-2x text-danger"></i>
                        </Button>
                        <Consumer>
                            {context => {
                                return(
                                    <DogChooserModal modal={this.state.modal} toggleModal={this.toggleModal} chooseDog={context.chooseDog} dogs={context.dogs}/>
                                )
                            }}
                        </Consumer>
                        <NavLink className="nav-link d-flex flex-row align-items-center" to="/landing">
                            <i id="paw" className="fa fa-paw fa-3x text-danger"></i>
                            <h1 className="display-4 text-danger">Barkr</h1>
                        </NavLink>
                        <NavComponent />
                    </div>
                </div>
                <div className="row border-0 bg-warning">
                    <div className="col-12 d-flex flex-row justify-content-center">
                        <h1 className="display-4">{this.props.pageName}&nbsp;<span className="text-primary">{this.props.dogName}</span></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;