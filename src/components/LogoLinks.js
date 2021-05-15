import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LegacyLogo from "../img/legacy-logo.jpg";
import { AppContext } from "../AppContext";

function Logo() {
  const { mainControl } = useContext(AppContext);
  return (
    <Container>
      <Row>
        <Col md={2}>
          <img src={LegacyLogo} id="legacyLogo" alt="Legacy Martial Arts Logo"/>
        </Col>
        <Col md={10}>
          <div className="linksDiv">
            <ul className={mainControl !== "dev" ? "linksList" : "kidsClassLinksList"}>
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