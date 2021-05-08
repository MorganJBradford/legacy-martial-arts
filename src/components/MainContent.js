import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainContent() {
  return(
    <div className="mainContent">
      <div className="container">
        <Row>
          <Col xs={12} md={4} className="mainCols">
            <div className="sectionWrapper">
              <Row className="colHeader">
                <Col><h1 className="colH1">OUR CLASSES</h1></Col>
                <Col><button className="colBtns">View All</button></Col>
              </Row>
            </div>
          </Col>

          <Col xs={12} md={4} className="mainCols">
            <div className="sectionWrapper">
              <Row className="colHeader">
                <Col><h1 className="colH1">OUR INSTRUCTORS</h1></Col>
                <Col><button className="colBtns">View All</button></Col>
              </Row>
            </div>
          </Col>

          <Col xs={12} md={4} className="mainCols">
            <div className="sectionWrapper">
              <Row className="colHeader">
                <Col><h1 className="colH1">CURRENT NEWS</h1></Col>
                <Col><button className="colBtns">View All</button></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainContent;