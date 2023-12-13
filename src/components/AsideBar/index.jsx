import React, { useContext } from "react";
import { BasketContext } from "../../contexts/BasketContext";
import "./index.scss";

function AsideBar() {
  const { basket } = useContext(BasketContext);
  return (
    <div className="aside">
      <div className="aside__body">
        <div className="aside__head">
          <h2>your card</h2>
          <span>&#10005;</span>
        </div>
        <div className="aside__items">
          {basket.map((x) => (
            <div className="aside__card">
              <img className="aside__card__image" src={x.thumbnail} alt="" />
              <div className="aside__card__text">
                <div className="aside__card__name">{x.name}</div>
                <div className="aside__card__price">
                  {x.count} x ${x.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
