import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Home from '../../pages/Home';
import { Link, useHistory } from "react-router-dom";

function Nav() {

    return (
        <div className="Navbar">
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootstrap.Navbar.Brand href="#home">GameOn!</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        {/* <ReactBootstrap.NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <ReactBootstrap.NavDropdown.Item href="#action/3.1">Chat</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.2">Dashboard</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Divider />
                                <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                        </ReactBootstrap.NavDropdown> */}
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        <Link to="/SignIn"> Log Out</Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    );

}

export default Nav;