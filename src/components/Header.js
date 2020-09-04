import React, { } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler, NavbarBrand, Form, Button } from 'reactstrap';

import { Navbar, FormControl } from 'react-bootstrap';
import './Header.css'
import WheelSvg from '../assets/icons/wheel.svg'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cart from './Cart';

function Header() {
    return (
        <div className="HeaderMainDiv fixed-top">
            <div className="d-flex">
                <NavbarBrand className="HeaderNavbarBrand mt-3" href="/"> <img src={WheelSvg} className="HeaderLogo"></img> Online Cars Shop</NavbarBrand>
                <Sidebar />
            </div>
            <div className = "d-flex">
                <Cart />
                <Navbar>
                    <NavbarToggler aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <div className="mr-auto nav">
                        </div>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            {!!localStorage.getItem("token") ? (
                                <Link to="/auth/logout">
                                    <Button className="bg-danger">
                                        Logout
                                    </Button>
                                </Link>
                            ) : (
                                <Link to="/auth/login">
                                    <Button className="bg-danger">
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </Form>
                    </NavbarCollapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Header