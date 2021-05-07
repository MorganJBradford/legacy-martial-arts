import React from "react";

function TopBar() {
  return (
    <div className="topBar">
      <div className="container">
        <ul className="topBarList">
          <li className="topBarLi"><i class="fa fa-calendar"></i>Opening Hours</li>
          <li className="topBarLi"><i class="fa fa-phone"></i>(630) 224-0580</li>
        </ul>
        <ul className="topBarSocialsList">
          <li className="topBarSocialsLi"><a href="https://www.facebook.com/Legacy.TKD" class="fa fa-facebook"></a></li>
          <li className="topBarSocialsLi"><a href="https://twitter.com/legacytkd?lang=en" class="fa fa-twitter"></a></li>
          <li className="topBarSocialsLi"><a href="https://www.instagram.com/tkdgirl307/?hl=en" class="fa fa-instagram"></a></li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;