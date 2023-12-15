import React, { useState } from "react";
import "./index.scss";

function AsideBar({ isOpen, setIsOpen, head, children }) {
  const [isTransitionEnd, setIsTransitionEnd] = useState(true);

  return (
    <div
      className={`aside ${isOpen ? "aside--open" : ""}`}
      onTransitionEnd={() => setIsTransitionEnd(!isTransitionEnd)}
      style={isTransitionEnd ? (isOpen ? null : { zIndex: "-1" }) : null}
    >
      <div className="aside__body">
        <div className="aside__head">
          <h2>{head}</h2>
          <span onClick={() => setIsOpen(false)}>&#10005;</span>
        </div>
        <div className="aside__items">{children}</div>
      </div>
    </div>
  );
}

export default AsideBar;
