import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function NewsCol() {
  return (
    <>
      <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
        <div className="headerWrapper d-flex justify-content-center">
          <Row className="colHeader">
            <Col><h1 className="colH1">CURRENT NEWS</h1></Col>
            <Col><button className="colBtns">View All</button></Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="classColSection">
            <Col className="mainColWidth">
              <h1 className="classColH1">Board Break Practice May 3-May 6th</h1>
              <p className="classColP">Students will have the opportunity to practice their board breaking for their upcoming promotion test. Board break practice will take place during regular classes beginning Monday May 3rd through Thursday May 6th.Boards are $3 per board. Please let us know if you will be participating.</p>
              <button className="moreInfoBtnRed">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="classColSection">
            <Col className="mainColWidth">
              <h1 className="classColH1">In-Person Black Belt Progress Testing Friday May 14th</h1>
              <p className="classColP">In-person Black Belt Progress testing will take place on Friday May 14th at 6:00 pm. Students must contact the office and let us know they are testing. Testing fees and forms are due on Wed. May 12th We will assign students testing times. Testing forms can be downloaded from the student section of the website. […]</p>
              <button className="moreInfoBtnRed">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="classColSection">
            <Col className="mainColWidth">
              <h1 className="classColH1">In-Person Low Belt Test Sat. May 15th</h1>
              <p className="classColP">In-person low belt testing (white-brown) will be Saturday May 15th. There will be no regular classes that day. Forms and testing fees are due in the office by Wednesday May 12th. We will assigning testing times to our students. Testing forms can be downloaded from the student section of the website.</p>
              <button className="moreInfoBtnRed">MORE INFO</button>
            </Col>
          </Row>
        </div>
        <div className="sectionWrapper d-flex justify-content-center">
          <Row className="classColSection">
            <Col className="mainColWidth">
              <h1 className="classColH1">Black Belt Ceremony Sat. May 15th</h1>
              <p className="classColP">The Black Belt Ceremony for students who tested on April 17th for a 1st, 2d or 3rd degree Black Belt in Taekwondo will be held Saturday May 15th. Students must turn in their Black Belt essays no later than Saturday May 8th. They will be given their new Black Belt uniform which they should wear […]</p>
              <button className="moreInfoBtnRed">MORE INFO</button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default NewsCol;

