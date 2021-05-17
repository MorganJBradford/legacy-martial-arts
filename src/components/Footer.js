import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../img/legacy-logo-footer.jpg";

function Footer() {
  return (
    <>
    <div className="footerBuffer">
    </div>
    <div className="footerBackground">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <h1 className="footerColH1">Contact Info</h1>
            <div className="d-flex justify-content-center">
              <Row className="footerColSection">
                <Col>
                  <h2 className="footerColH2">LEGACY MARTIAL ARTS</h2>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">ADDRESS</h2></Col>
                    <Col><p className="footerLocation">blah blah blah</p></Col>
                  </Row>
                  <Row className="locationSectionMid">
                    <Col><h2 className="footerColH2">TELEPHONE</h2></Col>
                    <Col><p className="footerLocation">(630) 224-0580</p></Col>
                  </Row>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">EMAIL</h2></Col>
                    <Col><p className="footerLocation">masterjane.legacy @gmail.com</p></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
              <Row>
                <Col>
                  <img src={Logo} id="footerLogo"/>
                  <p className="footerMid">We here at Legacy Martial Arts welcome the opportunity to have you or your children study the martial arts with us. We will do our best to help you gain the most from your training!</p>
                </Col>
              </Row>
          </Col>
          <Col xs={12} md={4} lg={4} xl={4} className="mainCols">
            <h1 className="footerColH1">Contact Info</h1>
            <div className="d-flex justify-content-center">
              <Row className="footerColSection">
                <Col>
                  <h2 className="footerColH2">OPENING HOURS</h2>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">MONDAY</h2></Col>
                    <Col><p className="footerHours">3:30pm - 830:pm</p></Col>
                  </Row>
                  <Row className="locationSectionMid">
                    <Col><h2 className="footerColH2">TUESDAY</h2></Col>
                    <Col><p className="footerHours">11:30am - 8:30pm</p></Col>
                  </Row>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">WEDNESDAY</h2></Col>
                    <Col><p className="footerHours">3:30pm - 830:pm</p></Col>
                  </Row>
                  <Row className="locationSectionMid">
                    <Col><h2 className="footerColH2">THURSDAY</h2></Col>
                    <Col><p className="footerHours">3:30pm - 830:pm</p></Col>
                  </Row>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">FRIDAY</h2></Col>
                    <Col><p className="footerHours">11:30am - 7:30pm</p></Col>
                  </Row>
                  <Row className="locationSectionMid">
                    <Col><h2 className="footerColH2">SATURDAY</h2></Col>
                    <Col><p className="footerHours">9:15am - 12:30pm</p></Col>
                  </Row>
                  <Row className="locationSection">
                    <Col><h2 className="footerColH2">SUNDAY</h2></Col>
                    <Col><p className="footerHours">CLOSED</p></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Footer;