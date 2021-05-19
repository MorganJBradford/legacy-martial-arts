import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FamilyClassImg from "../../img/family-class.jpg";


function FamilyClass(props) {
  return (
  <div className="sectionWrapper d-flex justify-content-center">
    <Row className="classColSection">
      <Col>
        <img src={FamilyClassImg} alt="a family at a tournament" className="colPic"/>
      </Col>
      <Col>
        <h1 className="classColH1">FAMILY TAEKWONDO</h1>
        <p className="classColP">Keep your family strong while having a great time together.</p>
        <button className="moreInfoBtnRed" onClick={() => props.onMoreInfo()}>MORE INFO</button>
      </Col>
    </Row>
  </div>
  );
}

export default FamilyClass;