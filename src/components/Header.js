import React from "react";
// import Carousel from "./Carousel";
import LogoLinks from "./LogoLinks";
import TopBar from "./TopBar";

function Header() {
  // TODO: check state slice responsible for Carousel|| hook?
  // if (stateCheck) {
    return (
      <>
        <TopBar />
        <LogoLinks />
        {/* <Carousel /> */}
      </>
    );
  // } else {
  //   return (
  //     <>
  //       <TopBar />
  //       <Logo />
  //       <Links />
  //     </>
  //   );
  // }
}

export default Header;