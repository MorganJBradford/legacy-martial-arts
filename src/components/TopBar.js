import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AppContext } from "../AppContext";

function TopBar() {
  const { setMainControl } = useContext(AppContext);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
      <Navbar.Brand className="navbar" href="#home" onClick={() => setMainControl("home")}>Legacy Martial Arts</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <i class="fa fa-calendar"></i>
          <NavDropdown title="Opening Hours" id="collapsible-nav-dropdown" className="test">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <i className="fa fa-phone"></i>
          <Nav.Link href="#phone" className="test">(630) 224-0580</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#socials">
            <a href="https://www.facebook.com/Legacy.TKD" class="fa fa-facebook"></a>
            <a href="https://twitter.com/legacytkd?lang=en" class="fa fa-twitter"></a>
            <a href="https://www.instagram.com/tkdgirl307/?hl=en" class="fa fa-instagram"></a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;