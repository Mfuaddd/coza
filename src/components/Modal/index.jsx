import React, { useContext, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../contexts/BasketContext";
import { wishlistContext } from "../../contexts/WishlistContext";

function Modal({ setItem, item }) {
  const { addToBasket } = useContext(BasketContext);
  const { wishlist, toggleWishlist } = useContext(wishlistContext);
  const [count, setCount] = useState(1)

  const handleCountDencrease = ()=>{  
    if (count>0) {
        setCount(count-1)
    }
  }

  const handleCountIncrease = ()=>{  
    setCount(count+1)
  }
  return (
    <div className="modal">
      <div className="modal__context">
        <div className="modal__context__image">
          <img src={item ? item.thumbnail : null} alt="" />
        </div>
        <div className="modal__context__right">
          <div className="modal__context__close">
            <button onClick={() => setItem(null)}>&#10005;</button>
          </div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description.text}</p>
          <div className="modal__context__count">
            <button onClick={handleCountDencrease}>-</button>
            <span>{count}</span>
            <button onClick={handleCountIncrease}>+</button>
          </div>
          <button className="modal__context__add" onClick={() => addToBasket(item,count)}>Add To Basket</button>
          <button className="modal__context__add" onClick={() => toggleWishlist(item)}>Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
