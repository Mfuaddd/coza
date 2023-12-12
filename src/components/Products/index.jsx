import React, { useCallback, useContext, useState } from "react";
import "./index.scss";
import { FetchContext } from "../../contexts/FetchContext";
import Modal from "../Modal";

function Products() {
  const { apiData } = useContext(FetchContext);
  const [searchPopUp, setSearchPopUp] = useState(true);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("all");
  const [popUpSearch, setPopUpSearch] = useState(false);
  const [popUpFilter, setPopUpFilter] = useState(false);
  const [item, setItem] = useState(null)

  function handleClickFilter() {
    setPopUpFilter(!popUpSearch);
    setPopUpSearch(false);
  }
  function handleClickSearch() {
    setPopUpSearch(!popUpSearch);
    setPopUpFilter(false);
  }

  return (
    <div className="products">
      {item ? <Modal setItem={setItem} item={item}/> : null}
      <div className="container">
        <div className="products__header">
          <h3>Product Overview</h3>
        </div>
        <div className="products__top">
          <ul className="products__top__categories">
            <li
              className={category === "all" ? "active" : null}
              onClick={() => setCategory("all")}
            >
              All Products
            </li>
            <li
              className={category === "Womens" ? "active" : null}
              onClick={() => setCategory("Womens")}
            >
              Womens
            </li>
            <li
              className={category === "Mens" ? "active" : null}
              onClick={() => setCategory("Mens")}
            >
              Mens
            </li>
            <li
              className={category === "Kids" ? "active" : null}
              onClick={() => setCategory("Kids")}
            >
              Kids
            </li>
          </ul>
          <div className="products__top__filter" onClick={handleClickFilter}>
            <i className="fa-solid fa-filter"></i>
            Filter
          </div>
          <div className="products__top__search" onClick={handleClickSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
          </div>
        </div>
        <div className={`products__pop-up ${popUpSearch ? "active" : ""}`}>
          <div className={`products__pop-up__search`}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
        </div>
        <div className="products__items">
          {apiData.map((x) => {
            if (
              x.name.toLowerCase().includes(input.toLowerCase()) &&
              (x.category === category || category === "all")
            ) {
              return (
                <div className="products__item">
                  <div className="products__item__image">
                    <img src={x.thumbnail} alt="" />
                    <button onClick={()=>setItem(x)}>Quick View</button>
                  </div>
                  <span className="products__item__name">{x.name}</span>
                  <span className="products__item__price">${x.price}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
