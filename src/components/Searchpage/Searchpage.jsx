import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./searchpage.css";
import Navbar from "../Navbar/Navbar";
import Appbar from "../Appbar/Appbar";
import Allresults from "../Allresults/Allresults";
import ShowSkeleton from "../ShowSkeleton/ShowSkeleton";
import axios from "axios";

function Searchpage() {
  let params = useParams();
  const [show, setShow] = useState(false);
  const [searches, setSearches] = useState([]);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    const base_URL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_VIDEO_API_KEY}&cx=${process.env.REACT_APP_SEARCHING}&q=${params.id}&gl=in`;
    async function fetchData() {
      const request = await axios.get(base_URL);
      setShow(true);
      setSearchCount(request.data.searchInformation);
      setSearches(request.data.items);
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
          {show &&
            `About ${searchCount.formattedTotalResults} results in (${searchCount.formattedSearchTime}) seconds`}
        </div>
        {show && searches.map((search) => <Allresults value={search} />)}
        {!show && [1, 2, 3, 4, 5, 6, 7, 8].map((e) => <ShowSkeleton />)}
      </div>
    </div>
  );
}

export default Searchpage;
