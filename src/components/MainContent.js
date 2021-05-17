import Container from 'react-bootstrap/Container'
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../AppContext";
import ClassCol from "./ClassCol";
import InstructorCol from "./InstructorCol";
import NewsCol from "./NewsCol";
import FamilyTkd from "./FamilyTkd";
import KidsTkd from "./KidsTkd";
import MasterJane from "./MasterJane";
import InstructorJeremy from "./InstructorJeremy";
import InstructorTati from "./InstructorTati";

function MainContent() {
  const { mainControl } = useContext(AppContext);

  if (mainControl === "home") {
    return (
      <>
        <div className="mainContentBuffer"></div>
        <div className="mainContent">
          <Container>
            <Row>
              <ClassCol />
              <InstructorCol />
              <NewsCol />
            </Row>
          </Container>
        </div>
      </>
    );
  } else if (mainControl === "kidsClass") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <KidsTkd/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <ClassCol/>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "familyClass") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <FamilyTkd/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <ClassCol/>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "mj") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <MasterJane/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <InstructorCol/>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "jeremy") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <InstructorJeremy/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <InstructorCol/>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "tati") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <InstructorTati/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <InstructorCol/>
          </Row>
        </Container>
      </div>
    ); 
  }
}

export default MainContent;