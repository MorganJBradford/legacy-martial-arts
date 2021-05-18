import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MJ from "../img/mj1.jpg";
import Tati from "../img/tati1.jpg";
import Jeremy from "../img/jeremy2.jpg";

function InstructorCol() {
  const { setMainControl } = useContext(AppContext);

  function scrollToTop(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }

  return (
    <>
      <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
        <div className="headerWrapper d-flex justify-content-center">
          <Row className="colHeader">
            <Col><h1 className="colH1OverFlow">OUR INSTRUCTORS</h1></Col>
            <Col><button className="colBtns">View All</button></Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="instructorColSection">
            <Col>
              <img src={MJ} alt="Master Jane kicking towards the sky" className="colPic"/>
            </Col>
            <Col>
              <h1 className="instructorColH1">MASTER JANE</h1>
              <p className="classColP">Taekwondo, Hapkido</p>
              <button className="moreInfoBtnRed" onClick={() => scrollToTop("mj")}>MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="instructorColSection">
            <Col>
              <img src={Jeremy} alt="instructor Jeremy" className="colPic"/>
            </Col>
            <Col>
              <h1 className="instructorColH1">INSTRUCTOR JEREMY</h1>
              <p className="classColP">Taekwondo</p>
              <button className="moreInfoBtnRed" onClick={() => scrollToTop("jeremy")}>MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="instructorColSection">
            <Col>
              <img src={Tati} alt="junior instructor Tati" className="colPic"/>
            </Col>
            <Col>
              <h1 className="instructorColH1">JUNIOR INSTRUCTOR TATI</h1>
              <p className="classColP">Taekwondo</p>
              <button className="moreInfoBtnRed" onClick={() => scrollToTop("tati")}>MORE INFO</button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default InstructorCol;