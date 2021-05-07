import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainContent() {
  return(
    <div className="mainContent">
      <div className="container">
        <Row>
          <Col xs={12} md={4}>
            <div className="sectionWrapper">
              <h1 className="ourClasses">OUR CLASSES</h1>
              <button className="colBtns">View All</button>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="sectionWrapper">
              <h1 className="ourClasses">OUR INSTRUCTORS<button className="colBtns">View All</button></h1>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="sectionWrapper">
              <h1 className="ourClasses">CURRENT NEWS<button className="colBtns">View All</button></h1>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainContent;