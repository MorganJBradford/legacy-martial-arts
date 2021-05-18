import React from "react";
import Col from "react-bootstrap/Col";
import colHeaderPic from "../img/mj2.jpg";

function MasterJane() {
  return (
    <>
      <Col xs={12} md={7} lg={7} xl={7} className="kidsCol">
        <div className="kidsColSectionOne kidsColPosition">
          <img src={colHeaderPic} alt="Master Jane" className="instructorsColPic"/>
          <h1 className="kidsColH1">Master Jane Dillon</h1>
        </div>
        <div className="kidsColSectionTwo kidsColPosition">
          <ul className="instructorColUl">
            <li>5th Degree Black Belt Taekwondo</li>
          </ul>
        </div>
      </Col>
    </>
  );
}

export default MasterJane;