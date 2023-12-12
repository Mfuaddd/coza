import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../contexts/BasketContext";

function Modal({setItem,item}) {
    const {addToBasket} = useContext(BasketContext)
  return (
    <div className="modal">
        <div className="modal__context">
            <div className="modal__context__image">
                <img src={item ? item.thumbnail: null} alt="" />
            </div>
            <div className="modal__context__right">
                <div className="modal__context__close">
                    <button onClick={()=>setItem(null)}>&#10005;</button>
                </div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description.text}</p>
                <button onClick={()=>addToBasket()}>Add To basket</button>
            </div>
        </div>
    </div>
  );
}

export default Modal;
