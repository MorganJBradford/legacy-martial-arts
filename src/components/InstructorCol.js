import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmKick from "../img/em-rhkick.jpg"
import MJ from "../img/mj1.jpg";

function InstructorCol() {
  return (
    <>
      <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
        <div className="headerWrapper d-flex justify-content-center">
          <Row className="colHeader">
            <Col><h1 className="colH1">OUR INSTRUCTORS</h1></Col>
            <Col><button className="colBtns">View All</button></Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="instructorColSection">
            <Col>
              <img src={MJ} className="colPic"/>
            </Col>
            <Col>
              <h1 className="instructorColH1">MASTER JANE</h1>
              <p className="classColP">Taekwondo, Hapkido</p>
              <button className="classColBtn">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="instructorColSection">
            <Col>
              <img src={EmKick} className="colPic"/>
            </Col>
            <Col>
              <h1 className="instructorColH1">INSTRUCTOR TATI</h1>
              <p className="classColP">Taekwondo</p>
              <button className="classColBtn">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="instructorColSection">
            <Col>
              <img src={EmKick} className="colPic"/>
            </Col>
            <Col>
              <h1 className="instructorColH1">INSTRUCTOR ETHAN</h1>
              <p className="classColP">Taekwondo</p>
              <button className="classColBtn">MORE INFO</button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default InstructorCol;