import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ViewInstructors() {
  return (
    <div className="headerWrapper d-flex justify-content-center">
      <Row className="colHeader">
        <Col><h1 className="colH1OverFlow">OUR INSTRUCTORS</h1></Col>
        <Col><button className="colBtns">View All</button></Col>
      </Row>
    </div>
  );
}

export default ViewInstructors;