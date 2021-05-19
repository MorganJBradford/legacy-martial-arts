import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function ViewClasses() {
  return (
    <div className="headerWrapper d-flex justify-content-center">
      <Row className="colHeader">
        <Col><h1 className="colH1">OUR CLASSES</h1></Col>
        <Col><button className="colBtns">View All</button></Col>
      </Row>
    </div>
  );
}

export default ViewClasses;