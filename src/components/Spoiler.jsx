import React, { useState } from "react";
import "../css/Spoiler.css";

function Spoiler({ title = "Spoiler", children }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="spoilerContainer">
      <a className="spoilerTop" onClick={toggle}>
        <span className={`arrow ${open ? "open" : ""}`}>►</span>
        {title}
      </a>
      <div className={`spoilerContent ${open ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Spoiler;