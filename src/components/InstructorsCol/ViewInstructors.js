import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ViewInstructors() {
  const { setMainControl } = useContext(AppContext);

  function handleMoreInfoClick(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }
  return (
    <div className="headerWrapper d-flex justify-content-center">
      <Row className="colHeader">
        <Col><h1 className="colH1OverFlow">OUR INSTRUCTORS</h1></Col>
        <Col>
          <Link to="/AllInstructors" onClick={() => handleMoreInfoClick("viewInstructors")}>
            <button className="colBtns">
              View All
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default ViewInstructors;