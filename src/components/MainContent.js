import Container from 'react-bootstrap/Container'
import React from "react";
import Row from "react-bootstrap/Row";
import ClassCol from "./ClassCol";
import InstructorCol from "./InstructorCol";
import NewsCol from "./NewsCol";

function MainContent() {
  return(
    <div className="mainContent">
      <Container>
        <Row>
          <ClassCol />
          <InstructorCol />
          <NewsCol />
        </Row>
      </Container>
    </div>
  );
}

export default MainContent;