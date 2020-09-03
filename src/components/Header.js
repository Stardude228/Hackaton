import React, { } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, Form, Button, NavLink } from 'reactstrap';

import {Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import './Header.css'
import WheelSvg from '../assets/icons/wheel.svg'

function Header() {
return (
    <div className="HeaderMainDiv fixed-top">
    <Navbar>
    <NavbarBrand className="HeaderNavbarBrand" href="/"> <img src={WheelSvg} className="HeaderLogo"></img> Online Cars Shop</NavbarBrand>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <NavLink className = "HeaderNavlinks" href="/">Home</NavLink>
        <NavLink className = "HeaderNavlinks" href="/about-us">Link</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavLink href="/about-us/2">Collection</NavLink>
        <NavLink href="/about-us/3">Collection</NavLink>
        <NavLink href="/about-us/4">Collection</NavLink>
        </NavDropdown>
        
    </Nav>
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
    </Form>
    </NavbarCollapse>
    </Navbar>
    </div>
    )
}

export default Header