import React from "react";
import "./newsresult.css";

function Newsresult({news}) {

  return (
    <div className="allresults">
      <div className="newsContent">
        <div className="newsLeft">
          <div className="link">{news.source.name}</div>
          <a href={news.url}><h2 className="newsTitle">
          {news.title}
          </h2>
          </a>
          <p className="aboutNews">
            {news.description}
          </p>
          <p className="aboutNews newsDate">{news.publishedAt.split('T')[0]}</p>
        </div>
        <div className="newsRight">
          <img
            className="newsThumbnail"
            src={news.image}
            onError={(e)=>{e.target.onerror = null; e.target.src="https://www.google.com/chrome/static/images/download-browser/big_pixel_phone.png"}}
            alt="thumbnail"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Newsresult;
