import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./newspage.css";
import Navbar from "../Navbar/Navbar";
import Appbar from "../Appbar/Appbar";
import Newsresult from "../Newsresult/Newsresult";
import ShowSkeleton from "../ShowSkeleton/ShowSkeleton";
import axios from "axios";

function Newspage() {
  let params = useParams();
  const [articles, setArticles] = useState([]);
  const [articleCount, setArticleCount] = useState(0);
  const [show,setShow] = useState(false);

  useEffect(() => {
    const base_URL = `https://gnews.io/api/v4/search?q=${params.id}&token=${process.env.REACT_APP_NEWS_API_KEY}&lang=en`;
    async function fetchData() {
      const request = await axios.get(base_URL);
      setShow(true);
      setArticleCount(request.data.totalArticles);
      setArticles(request.data.articles);
      return request;
    }
    fetchData();
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <Appbar />
      <div className="mainContent">
        <div className="fetchTime">About {articleCount} results</div>
        {show && articles.map((article) => (
          <Newsresult news={article} />
        ))}
        {!show && [1,2,3,4,5].map((x) => (
          <ShowSkeleton/>
        ))}
      </div>
    </div>
  );
}

export default Newspage;
