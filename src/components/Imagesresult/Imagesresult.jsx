import React from "react";
import "./imagesresult.css";
function Imagesresult() {
  return (
    <div className="imagesResult">
      <img
        className="singleImage"
        src="https://www.google.com/chrome/static/images/download-browser/big_pixel_phone.png"
        alt="anImage"
      ></img>
      <p className="imageTitle">This is a image for you</p>
      <p className="imageLink">This is your image.com</p>
    </div>
  );
}

export default Imagesresult;
