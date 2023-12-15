import React from "react";
import FetchProvider from "./FetchContext";
import BasketProvider from "./BasketContext";
import WishlistProvider from "./WishlistContext";

function MainProvider({ children }) {
  return (
    <FetchProvider>
      <BasketProvider>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </BasketProvider>
    </FetchProvider>
  );
}

export default MainProvider;
