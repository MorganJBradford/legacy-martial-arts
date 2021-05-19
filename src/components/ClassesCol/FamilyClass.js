import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FamilyClassImg from "../../img/family-class.jpg";


function FamilyClass(props) {
  const { setMainControl } = useContext(AppContext);

  function handleMoreInfoClick(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }
  return (
  <div className="sectionWrapper d-flex justify-content-center">
    <Row className="classColSection">
      <Col>
        <img src={FamilyClassImg} alt="a family at a tournament" className="colPic"/>
      </Col>
      <Col>
        <h1 className="classColH1">FAMILY TAEKWONDO</h1>
        <p className="classColP">Keep your family strong while having a great time together.</p>
        <button className="moreInfoBtnRed" onClick={() => handleMoreInfoClick("familyClass")}>MORE INFO</button>
      </Col>
    </Row>
  </div>
  );
}

export default FamilyClass;