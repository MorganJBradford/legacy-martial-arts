import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmKick from "../img/em-rhkick.jpg";

function ClassCol() {
  return (
    <>
      <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
        <div className="headerWrapper d-flex justify-content-center">
          <Row className="colHeader">
            <Col><h1 className="colH1">OUR CLASSES</h1></Col>
            <Col><button className="colBtns">View All</button></Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="colSection">
            <Col><img src={EmKick} className="colPic"/></Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default ClassCol;