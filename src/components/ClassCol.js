import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Col from "react-bootstrap/Col";
import ViewClasses from "./ClassesCol/ViewAll";
import KidsClass from "./ClassesCol/KidsClass";
import FamilyClass from "./ClassesCol/FamilyClass";
import AdultClass from "./ClassesCol/AdultClass";



function ClassCol() {
  const { setMainControl } = useContext(AppContext);
  
  function handleMoreInfoClick(param) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMainControl(param)
  }

  return (
    <>
      <Col xs={10} sm={10} md={5} lg={4} xl={4} className="mainCols">
        <ViewClasses/>
        <KidsClass onMoreInfo={() => handleMoreInfoClick("kidsClass")} />
        <FamilyClass onMoreInfo={() => handleMoreInfoClick("familyClass")} />
        <AdultClass onMoreInfo={() => handleMoreInfoClick("adultClass")} />
      </Col>
    </>
  );
}

export default ClassCol;