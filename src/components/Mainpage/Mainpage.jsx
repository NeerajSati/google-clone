import React, { useState } from "react";
import Mainheader from "../Mainheader/Mainheader";
import "./mainpage.css";
import googleLogo from "../../img/google.png";
import mic from "../../img/mic.png";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyModal from "../MyModal/MyModal";

function Mainpage() {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const searchEnter = async (e) => {
    e.preventDefault();
    let searchValue = await e.target[0].value.replace(/[^a-zA-Z0-9 ]/g, "");
    if (searchValue) {
      navigate(`/${searchValue}/all`);
    }
  };

  return (
    <div>
      <Mainheader />
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="mainPage">
        <div className="mainCenter">
          <img className="mainLogo" src={googleLogo} alt="googleLogo"></img>
          <form onSubmit={searchEnter}>
            <div className="searchBar">
              <ImSearch className="searchIcon" />
              <input className="searchInput" type="text"></input>
              <img
                className="micIcon"
                src={mic}
                alt="micIcon"
                onClick={() => setModalShow(true)}
              ></img>
            </div>
            <div className="searchButtons">
              <button className="searchBtn" type="submit">
                Google Search
              </button>
              <button className="searchBtn" type="submit">
                I'm Feeling Lucky
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
