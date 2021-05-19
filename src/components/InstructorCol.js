import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tati from "../img/tati1.jpg";
import ViewInstructors from "./InstructorsCol/ViewInstructors";
import MasterJane from "./InstructorsCol/MasterJane";
import InstructorJeremy from "./InstructorsCol/InstructorJeremy";
import JrInstructorTati from "./InstructorsCol/JrInstructorTati";

function InstructorCol() {
  const { setMainControl } = useContext(AppContext);

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