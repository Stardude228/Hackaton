import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
} from "reactstrap";
import '../components/Header.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Sidebar">
      <Navbar className="MainSidebardropdown">
        <div className="myNavbarCollapse__wrapper">
          <NavbarToggler onClick={toggleNavbar} className="mr-2 NavbarTogglerMy">
            <img className = "NavbarImage" src = "https://cdn4.iconfinder.com/data/icons/interface-line-5/32/menu-style1-512.png"></img>
          </NavbarToggler>
          <Collapse className="myNavbarCollapse" isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="SidebarLinks nav-link" to="/sale">Sales</Link>
              </NavItem>
              <NavItem>
                <Link className="SidebarLinks nav-link" to="/blog">Blog</Link>
              </NavItem>
              <NavItem>
                <Link className="SidebarLinks nav-link" to="/about">About Us</Link>
              </NavItem>
              <NavItem>
                <Link className="SidebarLinks nav-link" to="/pay">Payment</Link>
              </NavItem>
              <NavItem>
                <Link className="SidebarLinks nav-link" to="/contact">Contacts</Link>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="SidebarLinks" nav caret>
                    Catalog
                  </DropdownToggle>
                  <DropdownMenu className = "SidebarCatalogsDropdownMenu">
                    <NavItem>
                      <Link className="CatalogsLinks" to="/audi">Audi</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="CatalogsLinks" to="/bmw">BMW</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="CatalogsLinks" to="/lamborgini">Lamborgini</Link>
                    </NavItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Sidebar;
