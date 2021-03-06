import React from "react";
import Col from "react-bootstrap/Col";
import ViewClasses from "./ClassesCol/ViewClasses";
import KidsClass from "./ClassesCol/KidsClass";
import FamilyClass from "./ClassesCol/FamilyClass";
import AdultClass from "./ClassesCol/AdultClass";



function ClassCol() {
  return (
    <>
      <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
        <ViewClasses />
        <KidsClass />
        <FamilyClass />
        <AdultClass />
      </Col>
    </>
  );
}

export default ClassCol;