import React, { useState } from 'react';
import { Button, Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {

    const NavComponent = (props) => {

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

    return (
        <div className="container sticky-top bg-warning h-auto">
            <div className="row border-0 bg-warning" id="height-auto">
                <div className="col-12 d-flex flex-row justify-content-between align-content-center" id="height-auto">
                    <NavLink className="nav-link" to="/landing">
                        <Button className="d-flex flex-row align-items-center w-auto bg-warning header-button">
                            <i className="fa fa-dog fa-2x text-danger"></i>
                            <i className="fa fa-dog fa-2x text-danger"></i>
                        </Button>
                    </NavLink>
                    <NavLink className="nav-link d-flex flex-row" to="/landing">
                        <i id="paw" className="fa fa-paw fa-5x text-danger"></i>
                        <h1 id="logo-text" className="text-danger">Barkr</h1>
                    </NavLink>
                    <NavComponent />
                </div>
            </div>
            <div className="row border-0 bg-warning">
                <div className="col-12">
                    <h1>{props.pageName}</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;