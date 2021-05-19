import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tati from "../../img/tati1.jpg";

function JrInstructorTati() {
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
          <img src={Tati} alt="junior instructor Tati" className="colPic"/>
        </Col>
        <Col>
          <h1 className="instructorColH1">JUNIOR INSTRUCTOR TATI</h1>
          <p className="classColP">Taekwondo</p>
          <Link to="/JrInstructorTati" onClick={() => handleMoreInfoClick("tati")}>
            <button className="moreInfoBtnRed">
              MORE INFO
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default JrInstructorTati;