import Container from 'react-bootstrap/Container'
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
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
        <Container>
          <h1>yas</h1>
          <Row>
            <KidsTkd/>
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