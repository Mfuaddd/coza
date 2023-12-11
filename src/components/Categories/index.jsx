import React from "react";
import "./index.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__wrapper">
          <div
            className="categories__item"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp)",
            }}
          >
            <h2>Women</h2>
            <span>Spring 2018</span>
          </div>
          <div
            className="categories__item"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp)",
            }}
          >
            <h2>Men</h2>
            <span>Spring 2018</span>
          </div>
          <div
            className="categories__item"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp)",
            }}
          >
            <h2>Accessories</h2>
            <span>New Trend</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
