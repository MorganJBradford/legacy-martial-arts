import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AppContext } from "../AppContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <Row className="scheduleBase">
              <Col>
                <h2 className="footerColH2">OPENING HOURS</h2>
                <Row className="locationSection">
                  <Col><h2 className="footerColH2">MONDAY</h2></Col>
                  <Col><p className="footerHours">3:30pm - 830:pm</p></Col>
                </Row>
                <Row className="locationSectionMid">
                  <Col><h2 className="footerColH2">TUESDAY</h2></Col>
                  <Col><p className="footerHours">11:30am - 8:30pm</p></Col>
                </Row>
                <Row className="locationSection">
                  <Col><h2 className="footerColH2">WEDNESDAY</h2></Col>
                  <Col><p className="footerHours">3:30pm - 830:pm</p></Col>
                </Row>
                <Row className="locationSectionMid">
                  <Col><h2 className="footerColH2">THURSDAY</h2></Col>
                  <Col><p className="footerHours">3:30pm - 830:pm</p></Col>
                </Row>
                <Row className="locationSection">
                  <Col><h2 className="footerColH2">FRIDAY</h2></Col>
                  <Col><p className="footerHours">11:30am - 7:30pm</p></Col>
                </Row>
                <Row className="locationSectionMid">
                  <Col><h2 className="footerColH2">SATURDAY</h2></Col>
                  <Col><p className="footerHours">9:15am - 12:30pm</p></Col>
                </Row>
                <Row className="locationSection">
                  <Col><h2 className="footerColH2">SUNDAY</h2></Col>
                  <Col><p className="footerHours">CLOSED</p></Col>
                </Row>
              </Col>
            </Row>
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