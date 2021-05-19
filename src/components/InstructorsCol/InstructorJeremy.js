import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jeremy from "../../img/jeremy2.jpg";

function InstructorJeremy(props) {
  return (
    <div className="sectionWrapper d-flex justify-content-center">
      <Row className="instructorColSection">
        <Col>
          <img src={Jeremy} alt="instructor Jeremy" className="colPic"/>
        </Col>
        <Col>
          <h1 className="instructorColH1">INSTRUCTOR JEREMY</h1>
          <p className="classColP">Taekwondo</p>
          <button className="moreInfoBtnRed" onClick={() => props.onMoreInfoClick()}>MORE INFO</button>
        </Col>
      </Row>
    </div>
  );
}

export default InstructorJeremy;