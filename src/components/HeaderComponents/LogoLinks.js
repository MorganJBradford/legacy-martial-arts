import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import LegacyLogo from "../../img/legacy-logo.jpg";
import { AppContext } from "../../AppContext";

function Logo() {
  const { mainControl, setMainControl } = useContext(AppContext);
  return (
    <Container>
      <Row>
        <Col md={2}>
          <Link to="/" onClick={() => setMainControl("home")}>
            <img src={LegacyLogo} id={mainControl === "home" ? "legacyLogo" : "altLegacyLogo"} alt="Legacy Martial Arts Logo"/>
          </Link>
        </Col>
        <Col md={10}>
          <div className="linksDiv">
            <ul className={mainControl === "home" ? "linksList" : "altLinksList"}>
              <Link to="/" onClick={() => setMainControl("home")}>
                <li className={mainControl === "home" ? "linksLi bgRed" : "linksLi"}>
                  HOME
                </li>
              </Link>
              <Link to="/AllInstructors" onClick={() => setMainControl("viewInstructors")}>
                <li className={mainControl === "viewInstructors" ? "linksLi bgRed" : "linksLi"}>
                  ABOUT
                </li>
              </Link>
              <Link to="/AllClasses"  onClick={() => setMainControl("viewClasses")}>
                <li className={mainControl === "viewClasses" ? "linksLi bgRed" : "linksLi"}>
                  CLASSES
                </li>
              </Link>
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