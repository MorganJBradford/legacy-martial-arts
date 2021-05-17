import React from "react";
import Col from "react-bootstrap/Col";
import colHeaderPic from "../img/tati.jpg";

function InstructorJeremy() {
  return (
    <>
      <Col xs={12} md={7} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={colHeaderPic} className="instructorsColPic"/>
          <h1 className="kidsColH1">Instructor Tati</h1>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <ul className="instructorColUl">
            <li>1stDegree Black Belt Taekwondo</li>
          </ul>
        </div>
      </Col>
    </>
  );
}

export default InstructorJeremy;