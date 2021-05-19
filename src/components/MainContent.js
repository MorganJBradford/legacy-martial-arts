import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdultClassPath from "./MainContentComponents/AdultClassPath";
import FamilyClassPath from "./MainContentComponents/FamilyClassPath";
import HomePath from "./MainContentComponents/HomePath";
import InstructorJeremyPath from "./MainContentComponents/InstructorJeremyPath";
import JrInstructorTatiPath from "./MainContentComponents/JrInstructorTatiPath";
import KidsClassPath from "./MainContentComponents/KidsClassPath";
import MasterJanePath from "./MainContentComponents/MasterJanePath";
import ViewClassesPath from "./MainContentComponents/ViewClassesPath";
import ViewInstructorsPath from "./MainContentComponents/ViewInstructorsPath";
import Header from "./Header";

function MainContent() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/AdultClass">
          <AdultClassPath/>
        </Route>
        <Route path="/AllClasses">
          <ViewClassesPath/>
        </Route>
        <Route path="/AllInstructors">
          <ViewInstructorsPath/>
        </Route>
        <Route path="/FamilyClass">
          <FamilyClassPath/>
        </Route>
        <Route path="/InstructorJeremy">
          <InstructorJeremyPath/>
        </Route>
        <Route path="/JrInstructorTati">
          <JrInstructorTatiPath/>
        </Route>
        <Route path="/KidsClass">
          <KidsClassPath/>
        </Route>
        <Route path="/MasterJane">
          <MasterJanePath/>
        </Route>
        <Route path="/">
          <HomePath/>
        </Route>
      </Switch>
    </Router>
  );
}

export default MainContent;