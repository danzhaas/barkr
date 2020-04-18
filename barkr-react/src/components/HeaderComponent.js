import React, { Component, useState } from 'react';
import { Button, Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {

    const NavComponent = (props) => {

        const [collapsed, setCollapsed] = useState(true);        
        const toggleNavbar = () => setCollapsed(!collapsed);

        return (
            <Navbar>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} className="position-absolute text-right p-1 bg-dark" navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/dog-home">
                                <i className="fa fa-home">This Dog's Page</i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/talk">
                                <i className="fa fa-comment">Talk to Me</i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/adventure">
                                <i className="fa fa-tree">Let's Adventure</i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/care">
                                <i className="fa fa-heart">Care for Me</i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

    return (
        <div className="d-flex flex-row justify-content-around align-content-center bg-warning">
            <NavLink id="header-dogs" className="nav-link align-items-center" to="/landing">
                <i className="fa fa-dog text-danger"></i>
                <i className="fa fa-dog text-danger"></i>
            </NavLink>
            <NavLink className="nav-link d-flex flex-row" to="/landing">
                <i id="paw" className="fa fa-paw fa-5x text-danger"></i>
                <h1 id="logo-text" className="text-danger">Barkr</h1>
                <i className="fa fa-dog text-danger"></i>
            </NavLink>
            <NavComponent />
        </div>
    )
}

export default Header;