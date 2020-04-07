import React, { Component } from 'react';
import {Button, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Navbar, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    
    function NavComponent() {
        
        return(
            <>
                <NavbarToggler />
                <Collapse className="position-absolute text-right p-1 bg-dark" id="navbarDropdown" aria-labelledby="navbarDropdown">
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
            </>
        )
    }

    return(
        <>
            <NavLink className="nav-link" to="/landing">
                <i className="fa fa-dog fa-4x text-danger"></i>
                <i className="fa fa-dog fa-4x text-danger"></i>
            </NavLink> 
            <Jumbotron>
                <NavLink className="nav-link" to="/landing">
                    <i id="paw" className="fa fa-paw fa-5x text-danger"></i>
                    <h1 className="minih1 text-danger">Barkr</h1>  
                </NavLink>    
            </Jumbotron>        
            <NavComponent />
        </>   
    )
}

export default Header;