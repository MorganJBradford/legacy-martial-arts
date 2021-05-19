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

  function handleMoreInfoClick(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }

  return (
    <>
      <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
        <ViewInstructors/>
        <MasterJane onMoreInfoClick={() => handleMoreInfoClick("mj")}/>
        <InstructorJeremy onMoreInfoClick={() => handleMoreInfoClick("jeremy")}/>
        <JrInstructorTati onMoreInfoClick={() => handleMoreInfoClick("tati")} />
      </Col>
    </>
  );
}

export default InstructorCol;