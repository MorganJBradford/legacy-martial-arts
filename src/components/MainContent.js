import Container from 'react-bootstrap/Container'
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../AppContext";
import ClassCol from "./ClassCol";
import InstructorCol from "./InstructorCol";
import NewsCol from "./NewsCol";
import KidsTkd from "./KidsTkd";

function MainContent() {
  const { mainControl, setMainControl } = useContext(AppContext);


  if (mainControl === "dev") {
    return (
      <div className="mainContent">
        <h1 className="kidsColHeader">OUR CLASSES</h1>
        <Container>
          <Row>
            <KidsTkd/>
            <Col xs={12} md={1} lg={1} xl={1}>
            </Col>
            <ClassCol/>
          </Row>
        </Container>
      </div>
    ); 
  } else {
    return (
      <div className="mainContent">
        <Container>
          <Row>
            <ClassCol />
            <InstructorCol />
            <NewsCol />
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainContent;