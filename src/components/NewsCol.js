import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function NewsCol() {
  return (
    <Col xs={12} md={4} className="mainCols">
      <div className="sectionWrapper">
        <Row className="colHeader">
          <Col><h1 className="colH1">CURRENT NEWS</h1></Col>
          <Col><button className="colBtns">View All</button></Col>
        </Row>
      </div>
    </Col>
  );
}

export default NewsCol;

