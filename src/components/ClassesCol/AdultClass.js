import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AdultTkdHkd from "../../img/adultTkdHkd.jpg";


function AdultClass() {
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
          <img src={AdultTkdHkd} alt="adult class students" className="colPic"/>
        </Col>
        <Col>
          <h1 className="classColH1">ADULT TAEKWONDO & HAPKIDO</h1>
          <p className="classColP">Our Hapkido and Taekwondo program for adults is designed to help you to achieve your fitness and self defense goals.</p>
          <button className="moreInfoBtnRed" onClick={() => handleMoreInfoClick("adultClass")}>MORE INFO</button>
        </Col>
      </Row>
    </div>
  );
}

export default AdultClass;