import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmKick from "../img/em-rhkick.jpg";

function ClassCol() {
  return (
    <>
      <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
        <div className="headerWrapper d-flex justify-content-center">
          <Row className="colHeader">
            <Col><h1 className="colH1">OUR CLASSES</h1></Col>
            <Col><button className="colBtns">View All</button></Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="colSection">
            <Col>
              <img src={EmKick} className="colPic"/>
            </Col>
            <Col>
              <h1 className="classColH1">KIDS TAEKWONDO</h1>
              <p className="classColP">Taekwondo builds healthy kids, improving their physical coordination and self confidence in a positive atmosphere.</p>
              <button className="classColBtn">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="colSection">
            <Col>
              <img src={EmKick} className="colPic"/>
            </Col>
            <Col>
              <h1 className="classColH1">FAMILY TAEKWONDO</h1>
              <p className="classColP">Keep your family strong while having a great time together.</p>
              <button className="classColBtn">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="colSection">
            <Col>
              <img src={EmKick} className="colPic"/>
            </Col>
            <Col>
              <h1 className="classColH1">ADULT TAEKWONDO & HAPKIDO</h1>
              <p className="classColP">Our Hapkido and Taekwondo program for adults is designed to help you to achieve your fitness and self defense goals.</p>
              <button className="classColBtn">MORE INFO</button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default ClassCol;