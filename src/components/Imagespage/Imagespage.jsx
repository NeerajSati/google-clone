import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import Imagesresult from "../Imagesresult/Imagesresult";
import Navbar from "../Navbar/Navbar";
import "./imagespage.css";
import axios from "axios";
import ImageSkeleton from "../ShowSkeleton/ImageSkeleton";

function Imagespage() {
  let params = useParams();
  const [show, setShow] = useState(false);
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const base_URL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_VIDEO_API_KEY}&cx=${process.env.REACT_APP_SEARCHING}&q=${params.id}&searchType=image`;
    async function fetchData() {
      const request = await axios.get(base_URL);
      setSearches(request.data.items);
      setShow(true);
      return request;
    }
    fetchData();
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <Appbar />
      <div className="allImages">
        {show && searches.map((search) => <Imagesresult value={search} />)}
        {!show && [1, 2, 3, 4, 5, 6, 7, 8].map((e) => <ImageSkeleton />)}
      </div>
    </div>
  );
}

export default Imagespage;
