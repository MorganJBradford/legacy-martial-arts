import React from "react";
import Col from "react-bootstrap/Col";
import colHeaderPic from "../img/jeremy.jpg";

function InstructorJeremy() {
  return (
    <>
      <Col xs={12} md={7} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={colHeaderPic} alt="instructor Jeremy" className="instructorsColPic"/>
          <h1 className="kidsColH1">Instructor Jeremy Newman</h1>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <ul className="instructorColUl">
            <li>2nd Degree Black Belt Taekwondo</li>
          </ul>
        </div>
      </Col>
    </>
  );
}

export default InstructorJeremy;