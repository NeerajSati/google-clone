import React from "react";
import "./imagesresult.css";
function Imagesresult({ value }) {
  return (
    <div className="imagesResult">
    <div clasName="imageContainer">
      <a href={value.link}>
        <img
          className="singleImage"
          src={value.link}
          alt="anImage"
        ></img>
        </a>
        </div>
      <a href={value.image.contextLink}>
        <p className="imageTitle">{value.title}</p>
        <p className="imageLink">{value.displayLink}</p>
      </a>
    </div>
  );
}

export default Imagesresult;
