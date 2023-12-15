import React, { useEffect, useState } from "react";
import "./index.scss";
import { useContext } from "react";
import { BasketContext } from "../../contexts/BasketContext";
import AsideBar from "../AsideBar";
import { wishlistContext } from "../../contexts/WishlistContext";

function HeaderBottom() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const [isOpenWishlist, setIsOpenWishlist] = useState(false);
  const { wishlist, toggleWishlist } = useContext(wishlistContext);
  const {
    basket,
    removeFromBasket,
    icreaseItemCount,
    decreaseItemCount,
    totalPrice,
  } = useContext(BasketContext);

  function handleScroll() {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <AsideBar
        isOpen={isOpenBasket}
        setIsOpen={setIsOpenBasket}
        head={"your cart"}
      >
        {basket.map((x) => (
          <>
            <div className="aside__card">
              <img className="aside__card__image" src={x.thumbnail} alt="" />
              <div className="aside__card__text">
                <div className="aside__card__name">{x.name}</div>
                <div className="aside__card__price">${x.price}</div>
                <div className="aside__card__count">
                  <button onClick={() => decreaseItemCount(x)}>-</button>
                  <span>{x.count}</span>
                  <button onClick={() => icreaseItemCount(x)}>+</button>
                </div>
              </div>
              <button
                className="aside__card__delete"
                onClick={() => removeFromBasket(x)}
              >
                <div>DELETE</div>
              </button>
            </div>
            <div className="aside__bottom">
              <p>Total Price: ${totalPrice()}</p>
            </div>
          </>
        ))}
      </AsideBar>
      <AsideBar
        isOpen={isOpenWishlist}
        setIsOpen={setIsOpenWishlist}
        head={"Wishlist"}
      >
        {wishlist.map((x) => (
          <>
            <div className="aside__card">
              <img className="aside__card__image" src={x.thumbnail} alt="" />
              <div className="aside__card__text">
                <div className="aside__card__name">{x.name}</div>
                <div className="aside__card__price">${x.price}</div>
              </div>
              <button
                className="aside__card__delete"
                onClick={() => toggleWishlist(x)}
              >
                <div>DELETE</div>
              </button>
            </div>
          </>
        ))}
      </AsideBar>
      <div className={`header__bottom ${scrolled ? "scrolled" : null}`}>
        <div className="container">
          <div className="header__bottom__wrapper">
            <div className="header__bottom__logo">
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
                alt=""
              />
            </div>
            <ul className="header__bottom__navbar">
              <li>Home</li>
              <li>Shop</li>
              <li>Features</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className="header__bottom__icons">
              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
              <li onClick={() => setIsOpenBasket(true)}>
                <i className="fa-solid fa-cart-shopping"></i>
                <sup>{basket.length}</sup>
              </li>
              <li onClick={() => setIsOpenWishlist(true)}>
                <i className="fa-regular fa-heart"></i>
                <sup>{wishlist.length}</sup>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;
