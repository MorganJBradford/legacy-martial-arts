import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainContent() {
  return(
    <div className="mainContent">
      <div className="container">
        <Row>
          <Col className="col">
            <h1 className="ourClasses">Our Classes <button className="ourClassesBtn">View All</button></h1>
          </Col>
          <Col className="col">Bleep</Col>
          <Col className="col">Blp</Col>
        </Row>
        <Row>
          <Col>Bloop2</Col>
          <Col>Bloop2</Col>
        </Row>
        <Row>
          <Col>Bloop3</Col>
        </Row>
      </div>
    </div>
  );
}

export default MainContent;