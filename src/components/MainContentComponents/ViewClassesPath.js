import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import AdultClass from "../ClassesCol/AdultClass";
import FamilyClass from "../ClassesCol/FamilyClass";
import KidsClass from '../ClassesCol/KidsClass';

function ViewClassesPath() {
  return (
    <div className="mainContent">
      <h1 className="kidsColHeader">OUR CLASSES</h1>
      <Container>
        <Row>
          <Col>
            <KidsClass/>
          </Col>
          <Col>
            <FamilyClass/>
          </Col>
          <Col>
            <AdultClass/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewClassesPath;