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
            <h1 className="footerColH1">Contact Info</h1>
            <div className="sectionWrapper d-flex justify-content-center">
              <Row className="footerColSection">
                <Col>
                  <h2 className="footerColH2">LEGACY MARTIAL ARTS</h2>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">ADDRESS</h2></Col>
                    <Col><p className="footerLocation">blah blah blah</p></Col>
                  </Row>
                  <Row className="locationSectionMid">
                    <Col><h2 className="footerColH2">TELEPHONE</h2></Col>
                    <Col><p className="footerLocation">View All</p></Col>
                  </Row>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">EMAIL</h2></Col>
                    <Col><p className="footerLocation">View All</p></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <div className="sectionWrapper d-flex justify-content-center">
              <Row className="footerColSection">
                <Col><h2 className="footerColH2">OUR INSTRUCTORS</h2></Col>
                <Col><p className="footerData">View All</p></Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <h1 className="footerColH1">Contact Info</h1>
            <div className="sectionWrapper d-flex justify-content-center">
              <Row className="footerColSection">
                <Col>
                  <h2 className="footerColH2">LEGACY MARTIAL ARTS</h2>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">ADDRESS</h2></Col>
                    <Col><p className="footerLocation">blah blah blah</p></Col>
                  </Row>
                  <Row className="locationSectionMid">
                    <Col><h2 className="footerColH2">TELEPHONE</h2></Col>
                    <Col><p className="footerLocation">View All</p></Col>
                  </Row>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">EMAIL</h2></Col>
                    <Col><p className="footerLocation">View All</p></Col>
                  </Row>
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