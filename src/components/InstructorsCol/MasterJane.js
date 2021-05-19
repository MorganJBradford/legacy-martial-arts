import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MJ from "../../img/mj1.jpg";
import { AppContext } from "../../AppContext";

function MasterJane() {
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
          <img src={MJ} alt="Master Jane kicking towards the sky" className="colPic"/>
        </Col>
        <Col>
          <h1 className="instructorColH1">MASTER JANE</h1>
          <p className="classColP">Taekwondo, Hapkido</p>
          <button className="moreInfoBtnRed" onClick={() => handleMoreInfoClick("mj")}>MORE INFO</button>
        </Col>
      </Row>
    </div>
  );
}

export default MasterJane;