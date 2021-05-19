import React from "react";
import Col from "react-bootstrap/Col";
import ViewInstructors from "./InstructorsCol/ViewInstructors";
import MasterJane from "./InstructorsCol/MasterJane";
import InstructorJeremy from "./InstructorsCol/InstructorJeremy";
import JrInstructorTati from "./InstructorsCol/JrInstructorTati";

function InstructorCol() {
  return (
    <>
      <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
        <ViewInstructors/>
        <MasterJane />
        <InstructorJeremy />
        <JrInstructorTati />
      </Col>
    </>
  );
}

export default InstructorCol;