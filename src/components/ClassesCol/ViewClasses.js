import { AppContext } from "../../AppContext";
import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function ViewClasses() {
  const { setMainControl } = useContext(AppContext);

  function handleMoreInfoClick(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }
  return (
    <div className="headerWrapper d-flex justify-content-center">
      <Row className="colHeader">
        <Col><h1 className="colH1">OUR CLASSES</h1></Col>
        <Col><button className="colBtns" onClick={() => handleMoreInfoClick("viewClasses")}>View All</button></Col>
      </Row>
    </div>
  );
}

export default ViewClasses;