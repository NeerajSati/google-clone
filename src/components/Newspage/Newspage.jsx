import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./newspage.css";
import Navbar from "../Navbar/Navbar";
import Appbar from "../Appbar/Appbar";
import Newsresult from "../Newsresult/Newsresult";
import axios from "axios"

function Newspage() {
  let params = useParams();
  const [articles,setArticles] = useState([]);
  const [articleCount,setArticleCount] = useState(0);
  useEffect(() => {
    const base_URL = `https://gnews.io/api/v4/search?q=${params.id}&token=1f2747b6e516814b60b7fd6bdf1eff25&lang=en`;
  async function fetchData(){
    const request = await axios.get(base_URL);
    setArticleCount(request.data.totalArticles);
    setArticles(request.data.articles);
    return request;
}
fetchData();
  }, [params.id])
  return (
    <div>
      <Navbar />
      <Appbar />
      <div className="mainContent">
        <div className="fetchTime">
          About {articleCount} results
        </div>
        {
          articles.map((article)=>(
            <Newsresult news = {article}/>
            )
          )
        }
      </div>
    </div>
  );
}

export default Newspage;
