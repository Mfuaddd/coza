import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const wishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function toggleWishlist(item, count) {
    const itemIndex = wishlist.findIndex((x) => x.id === item.id);

    if (itemIndex === -1) {
      setWishlist([...wishlist, { ...item, count: count }]);
      return;
    }
    setWishlist(wishlist.filter((x) => x.id !== item.id));
  }

  const data = {
    wishlist,toggleWishlist
  };
  return (
    <wishlistContext.Provider value={data}>{children}</wishlistContext.Provider>
  );
}

export default WishlistProvider;
