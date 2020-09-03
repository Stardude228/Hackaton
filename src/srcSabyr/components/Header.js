import React, { } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, Form, Button, NavLink } from 'reactstrap';

import {Navbar, NavDropdown, FormControl, NavDropdownDivider, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
return (
    <div className="main">

    <Navbar >
    <NavbarBrand href="#home">Online-sale-cars</NavbarBrand>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#link">Link</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        {/* <NavDropdownItem href="#action/3.1">Action</NavDropdownItem>
        <NavDropdownItem href="#action/3.2">Another action</NavDropdownItem>
        <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
          <NavDropdownItem href="#action/3.4">Separated link</NavDropdownItem> */}
        </NavDropdown>
    </Nav>
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        <Link to="/login"><Button className="bg-danger">Login</Button></Link>
        
    </Form>
    </NavbarCollapse>
    </Navbar>
    </div>
    )
}

export default Header