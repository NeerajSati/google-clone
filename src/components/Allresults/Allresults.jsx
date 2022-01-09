import React from "react";
import "./allresults.css";
import { AiFillCaretDown } from "react-icons/ai";

function Allresults({ value }) {
  return (
    <div className="allresults">
      <a href={value.link}>
        <div className="link">
          {value.displayLink}
          <AiFillCaretDown className="linkLogo" />
        </div>
      </a>
      <a href={value.link}>
        <h2 className="linkTitle">{value.title}</h2>
      </a>
      <p className="aboutLink">{value.snippet}</p>
    </div>
  );
}

export default Allresults;
