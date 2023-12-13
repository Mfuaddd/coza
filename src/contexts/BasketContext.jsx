import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BasketContext = createContext();

function BaskeProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addToBasket(item) {
    const itemIndex = basket.findIndex((x) => x.id === item.id);
    console.log(itemIndex);

    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[itemIndex].count++;
      setBasket([...basket]);
    }
  }
  function icreaseItemCount(item) {
    const itemIndex = basket.findIndex((x) => x.id === item.id);
    basket[itemIndex].count++;
    setBasket([...basket]);
  }
  function decreaseItemCount(item) {
    const itemIndex = basket.findIndex((x) => x.id === item.id);
    if(basket[itemIndex].count > 1){
      basket[itemIndex].count--;
    }
    setBasket([...basket]);
  }

  function totalPrice() {
    return basket.reduce((total,x)=>total + x.count * x.price,0).toFixed(2)
  }

  function removeFromBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }

  const data = {
    basket,
    addToBasket,
    removeFromBasket,
    icreaseItemCount,
    decreaseItemCount,
    totalPrice
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}

export default BaskeProvider;
