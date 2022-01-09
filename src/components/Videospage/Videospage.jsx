import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./videospage.css";
import Navbar from "../Navbar/Navbar";
import Appbar from "../Appbar/Appbar";
import Videosresult from "../Videosresult/Videosresult";
import ShowSkeleton from "../ShowSkeleton/ShowSkeleton";
import axios from "axios";

function Videospage() {
  let params = useParams();
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [show,setShow] = useState(false);

  useEffect(() => {
    const base_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=title&maxResults=20&q=${params.id}&regionCode=in&relevanceLanguage=en&type=video&key=${process.env.REACT_APP_VIDEO_API_KEY}`;
    async function fetchData() {
      const request = await axios.get(base_URL);
      setShow(true);
      setVideoCount(request.data.pageInfo.totalResults);
      setVideos(request.data.items);
      return request;
    }
    fetchData();
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <Appbar />
      <div className="mainContent">
        <div className="fetchTime">
          About {videoCount} results in (0.56 seconds)
        </div>
        {show && videos.map((video) => (
          <Videosresult thisVideo={video} />
        ))}
        {!show && [1,2,3,4,5,6].map((x) => (
          <ShowSkeleton/>
        ))}
      </div>
    </div>
  );
}

export default Videospage;
