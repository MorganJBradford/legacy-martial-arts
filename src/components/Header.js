import React, { useContext } from "react";
import HomeCarousel from "./HomeCarousel";
import LogoLinks from "./LogoLinks";
import TopBar from "./TopBar";
import { AppContext } from "../AppContext";


function Header() {
  const { mainControl, setMainControl } = useContext(AppContext);

  if (mainControl !== "home") {
    return (
      <>
        <TopBar />
        <LogoLinks />
      </>
    );
  } else {
    return (
      <>
        <TopBar />
        <LogoLinks />
        <HomeCarousel />
      </>
    );
  }
}

export default Header;