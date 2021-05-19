import Container from 'react-bootstrap/Container'
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../AppContext";
import ClassCol from "./ClassCol";
import InstructorCol from "./InstructorCol";
import NewsCol from "./NewsCol";
import FamilyTkd from "./ClassDetailsComponents/FamilyTkd";
import KidsTkd from "./ClassDetailsComponents/KidsTkd";
import MasterJaneInfo from "./InstructorDetailsComponents/MasterJane";
import InstructorJeremyInfo from "./InstructorDetailsComponents/InstructorJeremy";
import JrInstructorTatiInfo from "./InstructorDetailsComponents/InstructorTati";
import AdultTkd from "./ClassDetailsComponents/AdultTkd";
import ViewClasses from "./ClassesCol/ViewClasses";
import AdultClass from "./ClassesCol/AdultClass";
import FamilyClass from "./ClassesCol/FamilyClass";
import ViewInstructors from "./InstructorsCol/ViewInstructors";
import InstructorJeremy from "./InstructorsCol/InstructorJeremy";
import MasterJane from "./InstructorsCol/MasterJane";
import JrInstructorTati from "./InstructorsCol/JrInstructorTati";
import KidsClass from './ClassesCol/KidsClass';

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
  } else if (mainControl === "viewClasses") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <Col>
              <KidsClass/>
            </Col>
            <Col>
              <FamilyClass/>
            </Col>
            <Col>
              <AdultClass/>
            </Col>
          </Row>
        </Container>
      </div>
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
            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
              <ViewClasses/>
              <FamilyClass/>
              <AdultClass/>
              <ViewInstructors/>
              <MasterJane/>
              <InstructorJeremy/>
              <JrInstructorTati/>
            </Col>
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
            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
              <ViewClasses/>
              <KidsClass />
              <AdultClass />
              <MasterJane />
              <ViewInstructors />
              <InstructorJeremy />
              <JrInstructorTati />
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "adultClass") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <AdultTkd/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
              <ViewClasses/>
              <KidsClass />
              <FamilyClass />
              <ViewInstructors />
              <MasterJane />
              <InstructorJeremy />
              <JrInstructorTati />
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "viewInstructors") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR INSTRUCTORS</h1>
        <Container>
          <Row>
            <Col>
              <MasterJane />
            </Col>
            <Col>
              <InstructorJeremy />
            </Col>
            <Col>
              <JrInstructorTati />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else if (mainControl === "mj") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR INSTRUCTORS</h1>
        <Container>
          <Row>
            <MasterJaneInfo/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
              <ViewInstructors />
              <InstructorJeremy />
              <JrInstructorTati />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else if (mainControl === "jeremy") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR INSTRUCTORS</h1>
        <Container>
          <Row>
            <InstructorJeremyInfo/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
              <ViewInstructors />
              <MasterJane />
              <JrInstructorTati />
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  } else if (mainControl === "tati") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR INSTRUCTORS</h1>
        <Container>
          <Row>
            <JrInstructorTatiInfo/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
              <ViewInstructors />
              <MasterJane />
              <InstructorJeremy />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainContent;