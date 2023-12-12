import React, { createContext, useState } from "react";

export const BasketContext = createContext();

function BaskeProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addToBasket(item) {
    const itemIndex = basket.findIndex((x) => x.id === item.id);
    
    if (itemIndex === -1) {
      setBasket(...basket, { ...item, count: 1 });
    } else {
      setBasket(++basket[itemIndex].count);
    }
  }
  function removeFromBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }

  const data = {
    basket,
    addToBasket,
    removeFromBasket,
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}

export default BaskeProvider;
