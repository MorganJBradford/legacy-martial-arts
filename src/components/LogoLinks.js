import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LegacyLogo from "../img/legacy-logo.jpg";

function Logo() {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <img src={LegacyLogo} id="legacyLogo" alt="Legacy Martial Arts Logo"/>
        </Col>
        <Col md={10}>
          <div className="linksDiv">
            <ul className="linksList">
              <li className="linksLi">HOME</li>
              <li className="linksLi">ABOUT</li>
              <li className="linksLi">CLASSES</li>
              <li className="linksLi">FAQ</li>
              <li className="linksLi linksLiLast">STUDENTS</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;