import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FootColOne from "./ClassCol";
import FootColTwo from "./InstructorCol";
import FootColThree from "./NewsCol";

function Footer() {
  return (
    <div className="footerBackground">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <div className="sectionWrapper d-flex justify-content-center">
              <Row className="classColSection">
                <Col>
                  <h1 className="classColH1">FAMILY TAEKWONDO</h1>
                  <p className="classColP">Keep your family strong while having a great time together.</p>
                  <button className="classColBtn">MORE INFO</button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <div className="sectionWrapper d-flex justify-content-center">
              <Row className="classColSection">
                <Col>
                  <h1 className="classColH1">FAMILY TAEKWONDO</h1>
                  <p className="classColP">Keep your family strong while having a great time together.</p>
                  <button className="classColBtn">MORE INFO</button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <div className="sectionWrapper d-flex justify-content-center">
              <Row className="classColSection">
                <Col>
                  <h1 className="classColH1">FAMILY TAEKWONDO</h1>
                  <p className="classColP">Keep your family strong while having a great time together.</p>
                  <button className="classColBtn">MORE INFO</button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;