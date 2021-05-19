import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import ClassCol from "../ClassCol";
import InstructorCol from "../InstructorCol";
import NewsCol from "../NewsCol";

function HomePath() {
  return (
    <>
      <div className="mainContentBuffer"></div>
      <div className="mainContent">
        <Container>
          <Row>
            <ClassCol />
            <InstructorCol />
            <NewsCol />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomePath;