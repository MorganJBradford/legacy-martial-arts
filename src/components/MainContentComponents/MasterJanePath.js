import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import InstructorJeremy from "../InstructorsCol/InstructorJeremy";
import JrInstructorTati from "../InstructorsCol/JrInstructorTati";
import MasterJaneInfo from "../InstructorDetailsComponents/MasterJane";
import ViewInstructors from "../InstructorsCol/ViewInstructors";

function MasterJanePath() {
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
}

export default MasterJanePath;