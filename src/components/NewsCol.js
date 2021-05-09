import React from "react";
import { Col, Row } from "react-bootstrap";

function NewsCol() {
  return (
    <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
      <div className="headerWrapper d-flex justify-content-center">
        <Row className="colHeader">
          <Col><h1 className="colH1">CURRENT NEWS</h1></Col>
          <Col><button className="colBtns">View All</button></Col>
        </Row>
      </div>
    </Col>
  );
}

export default NewsCol;

