import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jeremy from "../../img/jeremy2.jpg";

function InstructorJeremy() {
  const { setMainControl } = useContext(AppContext);

  function handleMoreInfoClick(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }
  return (
    <div className="sectionWrapper d-flex justify-content-center">
      <Row className="instructorColSection">
        <Col>
          <img src={Jeremy} alt="instructor Jeremy" className="colPic"/>
        </Col>
        <Col>
          <h1 className="instructorColH1">INSTRUCTOR JEREMY</h1>
          <p className="classColP">Taekwondo</p>
          <button className="moreInfoBtnRed" onClick={() => handleMoreInfoClick("jeremy")}>MORE INFO</button>
        </Col>
      </Row>
    </div>
  );
}

export default InstructorJeremy;