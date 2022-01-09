import React from "react";
import "./videosresult.css";
import { GoPrimitiveDot } from "react-icons/go";

function Videosresult({ thisVideo }) {
  return (
    <div className="allresults">
    <a href={`https://www.youtube.com/channel/${thisVideo.snippet.channelId}`}><div className="link">youtube.com {'>'} {thisVideo.snippet.channelTitle}</div></a>
      <a href={`https://www.youtube.com/watch?v=${thisVideo.id.videoId}`}><h2 className="videoTitle">{thisVideo.snippet.title}</h2></a>
      <div className="videoContent">
        <div className="videoLeft">
        <a href={`https://www.youtube.com/watch?v=${thisVideo.id.videoId}`}>
          <img
            className="videoThumbnail"
            src={thisVideo.snippet.thumbnails.default.url}
            alt="thumbnail"
          ></img>
        </a>
        </div>
        <div className="videoRight">
          <p className="aboutVideo">{thisVideo.snippet.description}</p>
          <p className="aboutVideo">
            {thisVideo.snippet.publishedAt.split("T")[0]}{" "}
            <GoPrimitiveDot class="dot" /> uploaded by{" "}
            {thisVideo.snippet.channelTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videosresult;
