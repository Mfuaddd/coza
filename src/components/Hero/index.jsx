import React, { useState } from "react";
import "./index.scss";

function Hero() {
//   const { apiData, getData } = useContext(FetchContext);
  const [imageState, setImageState] = useState(0);
  const [imageNext, setImageNext] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(true);

  const image = [
    "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
    "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
    "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
  ];

  const text = [
    { title: "Woman Collection 2018", head: "New Season" },
    { title: "Men New-Season", head: "Jackets & Coats" },
    { title: "Men Collection 2018", head: "New arrivals" },
  ];

//   useEffect(() => {
//     getData();
//   }, []);

  function handleSlide(direction) {
    if (!imageOpacity) return;

    switch (direction) {
      case "left":
        console.log("left", imageNext, imageState);
        setImageNext((imageNext + image.length - 1) % image.length);
        break;
      case "right":
        console.log("right", imageNext, imageState);
        setImageNext((imageNext + 1) % image.length);
        break;

      default:
        console.log("error");
        break;
    }
    setImageOpacity(false);
  }

  function trans() {
    setImageOpacity(true);
    setImageState(imageNext);
  }
  return (
    <div className="hero">
      <ul className="hero__images">
        <li
          onTransitionEnd={trans}
          style={
            imageOpacity
              ? { transition: "none", opacity: "0" }
              : { transition: "all 1s linear", opacity: "1" }
          }
          className="hero__images__back"
        >
          <img src={image[imageNext]} alt="" draggable="false" />
        </li>
        <li
          onTransitionEnd={trans}
          style={
            imageOpacity
              ? { transition: "none", opacity: "1" }
              : { transition: "all 1s linear", opacity: "0" }
          }
          className="hero__images__front"
        >
          <img src={image[imageState]} alt="" draggable="false" />
        </li>
      </ul>
      <div className="hero__text">
        <ul
          style={
            imageOpacity
              ? { transition: "all 1s linear", opacity: "1" }
              : { transition: "none", opacity: "0" }
          }
          className="hero__text__item"
        >
          <li><span>{text[imageNext].title}</span></li>
          <li><h2>{text[imageNext].head}</h2></li>
          <li><a href="/#">Shop Now</a></li>
        </ul>
        <ul
          style={
            imageOpacity
              ? { transition: "all 1s linear", opacity: "1" }
              : { transition: "all 1s linear", opacity: "0" }
          }
          className="hero__text__item"
        >
          <li><span>{text[imageState].title}</span></li>
          <li><h2>{text[imageState].head}</h2></li>
          <li><a href="/#">Shop Now</a></li>
        </ul>
      </div>
      <div onClick={() => handleSlide("left")} className="hero__left">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div onClick={() => handleSlide("right")} className="hero__right">
        <i className="fa-solid fa-caret-right"></i>
      </div>
    </div>
  );
}

export default Hero;
