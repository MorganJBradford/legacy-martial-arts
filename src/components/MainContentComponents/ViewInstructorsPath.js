import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import InstructorJeremy from "../InstructorsCol/InstructorJeremy";
import JrInstructorTati from "../InstructorsCol/JrInstructorTati";
import MasterJane from "../InstructorsCol/MasterJane";

function ViewInstructorsPath() {
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
}

export default ViewInstructorsPath;