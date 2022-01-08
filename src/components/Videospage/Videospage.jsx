import React from "react";
import "./videospage.css";
import Navbar from "../Navbar/Navbar";
import Appbar from "../Appbar/Appbar";
import Videosresult from "../Videosresult/Videosresult";

function Videospage() {
  return (
    <div>
      <Navbar />
      <Appbar />
      <div className="mainContent">
        <div className="fetchTime">
          About 13,590,000,000 results in (0.56 seconds)
        </div>
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
        <Videosresult />
      </div>
    </div>
  );
}

export default Videospage;
