import React, { useCallback, useContext } from "react";
import "./index.scss";
import { FetchContext } from "../../contexts/FetchContext";

function Products() {
    const {apiData} = useContext(FetchContext)

    console.log(apiData);
  return (
    <div className="products">
      <div className="container">
        <div className="products__header">
          <h3>Product Overview</h3>
        </div>
        <div className="products__top">
          <ul className="products__top__categories">
            <li>All Products</li>
            <li>Women</li>
            <li>Men</li>
            <li>Bag</li>
            <li>shoes</li>
            <li>Watches</li>
          </ul>
          <div className="products__top__filter">
            <i className="fa-solid fa-filter"></i>
            Filter
          </div>
          <div className="products__top__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
          </div>
        </div>
        <div className="products__items">
            {apiData.map(x=>(
                <div className="products__item">
                    <img src={x.thumbnail} alt="" />
                    <span className="products__item__name">{x.name}</span>
                    <span className="products__item__price">${x.price}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
