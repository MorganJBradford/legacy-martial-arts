import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import AdultClass from "../ClassesCol/AdultClass";
import FamilyTkd from "../ClassDetailsComponents/FamilyTkd";
import InstructorJeremy from "../InstructorsCol/InstructorJeremy";
import JrInstructorTati from "../InstructorsCol/JrInstructorTati";
import KidsClass from '../ClassesCol/KidsClass';
import MasterJane from "../InstructorsCol/MasterJane";
import ViewClasses from "../ClassesCol/ViewClasses";
import ViewInstructors from "../InstructorsCol/ViewInstructors";

function FamilyClassPath() {
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
}

export default FamilyClassPath;