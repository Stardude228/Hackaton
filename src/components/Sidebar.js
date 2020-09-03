import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Contact from "./navbar/contact/Contact";
import Blog from "./navbar/blog/Blog";
import Sale from "./navbar/sale/Sale";

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="col-1 col-md-1"color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/sale">Акции</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Блог</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Контакты</NavLink>
            </NavItem>
            <NavItem href="/catalog">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Каталог
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/sale" component={Sale} />
        </Switch>
      </Router>
    </div>
  );
};

export default Sidebar;


// import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

// class SideNavPage extends Component {
//   state = {
//     sideNavLeft: false,
//   }

// sidenavToggle = sidenavId => () => {
//   const sidenavNr = sideNav`${sidenavId}`
//   this.setState({
//     [sidenavNr]: !this.state[sidenavNr]
//   });
// };

// render() {
//     return (
//       <Router>
//         <MDBContainer>
//           <MDBBtn onClick={this.sidenavToggle("Left")}>
//             <MDBIcon size="lg" icon="bars" />
//           </MDBBtn>
//           <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
//               className="sn-bg-1">
//               <li>
//                 <div className="logo-wrapper sn-ad-avatar-wrapper">
//                   <a href="#!">
//                     <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
//                     <span>Anna Deynah</span>
//                   </a>
//                 </div>
//               </li>

//               <MDBSideNavNav>
//                 <MDBSideNavLink to="/other-page" topLevel>
//                   <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
//                 <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
//                   <MDBSideNavLink>Submit listing</MDBSideNavLink>
//                   <MDBSideNavLink>Registration form</MDBSideNavLink>
//                 </MDBSideNavCat>
//                 <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
//                   <MDBSideNavLink>For bloggers</MDBSideNavLink>
//                   <MDBSideNavLink>For authors</MDBSideNavLink>
//                 </MDBSideNavCat>
//                 <MDBSideNavCat name="About" id="about" icon="eye">
//                   <MDBSideNavLink>Instruction</MDBSideNavLink>
//                   <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
//                 </MDBSideNavCat>
//                 <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
//                   <MDBSideNavLink>FAQ</MDBSideNavLink>
//                   <MDBSideNavLink>Write a message</MDBSideNavLink>
//                 </MDBSideNavCat>
//               </MDBSideNavNav>
//           </MDBSideNav>
//         </MDBContainer>
//       </Router>
//     );
//   }
// }

// export default SideNavPage;