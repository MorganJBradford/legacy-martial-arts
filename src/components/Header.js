import React from "react";
import HomeCarousel from "./HomeCarousel";
import LogoLinks from "./LogoLinks";
import TopBar from "./TopBar";

function Header() {
  // TODO: check state slice responsible for Carousel|| hook?
  // if (stateCheck) {
    return (
      <>
        <TopBar />
        <LogoLinks />
        <HomeCarousel />
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