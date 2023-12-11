import React from "react";
import "./index.scss";

function HeaderBottom() {
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom__wrapper">
          <div className="header__bottom__logo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
              alt=""
            />
          </div>
          <ul className="header__bottom__navbar">
            <li>Home</li>
            <li>Shop</li>
            <li>Features</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="header__bottom__icons">
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li>
              <i className="fa-regular fa-heart"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
