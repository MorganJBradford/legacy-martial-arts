import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import AdultTkd from "../ClassDetailsComponents/AdultTkd";
import FamilyClass from "../ClassesCol/FamilyClass";
import InstructorJeremy from "../InstructorsCol/InstructorJeremy";
import JrInstructorTati from "../InstructorsCol/JrInstructorTati";
import KidsClass from '../ClassesCol/KidsClass';
import MasterJane from "../InstructorsCol/MasterJane";
import ViewClasses from "../ClassesCol/ViewClasses";
import ViewInstructors from "../InstructorsCol/ViewInstructors";

function AdultClassPath() {
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
}

export default AdultClassPath;