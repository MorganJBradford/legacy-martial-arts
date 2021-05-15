import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmKick from "../img/em-rhkick.jpg";

function KidsTkd() {
  return (
    <>
      <Col xs={12} md={7} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={EmKick} className="kidsColPic"/>
          <h1 className="classColH1">KIDS TAEKWONDO</h1>
          <p className="classColP">Taekwondo builds healthy kids, improving their physical coordination and self confidence in a positive atmosphere.</p>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <img src={EmKick} className="kidsColPic"/>
          <h1 className="classColH1">KIDS TAEKWONDO</h1>
          <p className="classColP">Taekwondo builds healthy kids, improving their physical coordination and self confidence in a positive atmosphere.</p>
        </div>
      </Col>
    </>
  );
}

export default KidsTkd;