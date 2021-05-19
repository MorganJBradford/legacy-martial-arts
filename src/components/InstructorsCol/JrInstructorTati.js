import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tati from "../../img/tati1.jpg";

function JrInstructorTati(props) {
  return (
    <div className="sectionWrapper d-flex justify-content-center">
      <Row className="instructorColSection">
        <Col>
          <img src={Tati} alt="junior instructor Tati" className="colPic"/>
        </Col>
        <Col>
          <h1 className="instructorColH1">JUNIOR INSTRUCTOR TATI</h1>
          <p className="classColP">Taekwondo</p>
          <button className="moreInfoBtnRed" onClick={() => props.onMoreInfoClick()}>MORE INFO</button>
        </Col>
      </Row>
    </div>
  );
}

export default JrInstructorTati;