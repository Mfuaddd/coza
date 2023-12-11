import React from "react";
import "./index.scss"

function HeaderTop() {
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top__wrapper">
          <div className="header__top__left">
            <p className="header__top__text">Free shipping for standard order over $100</p>
          </div>
          <ul className="header__top__right">
            <li className="header__top__text">Help & FAQs</li>
            <li className="header__top__text">My Account</li>
            <li className="header__top__text">EN</li>
            <li className="header__top__text">USD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
