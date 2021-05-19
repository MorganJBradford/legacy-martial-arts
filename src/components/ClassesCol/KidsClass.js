import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmKick from "../../img/em-rhkick.jpg";


function KidsClass(props) {
  return (
    <div className="sectionWrapper d-flex justify-content-center">
      <Row className="classColSection">
        <Col>
          <img src={EmKick} alt="a student kicking toward the sky" className="colPic"/>
        </Col>
        <Col>
          <h1 className="classColH1">KIDS TAEKWONDO</h1>
          <p className="classColP">Taekwondo builds healthy kids, improving their physical coordination and self confidence in a positive atmosphere.</p>
          <button className="moreInfoBtnRed" onClick={() => props.onMoreInfo()}>MORE INFO</button>
        </Col>
      </Row>
    </div>
  );
}

export default KidsClass;

