import React from "react";
import Row from "react-bootstrap/Row";
import ClassCol from "./ClassCol";
import InstructorCol from "./InstructorCol";
import NewsCol from "./NewsCol";

function MainContent() {
  return(
    <div className="mainContent">
      <div className="container">
        <Row>
          <ClassCol />
          <InstructorCol />
          <NewsCol />
        </Row>
      </div>
    </div>
  );
}

export default MainContent;