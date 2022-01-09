import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./navbar.css";
import userImage from "../../img/user.jpg";
import googleImg from "../../img/google.png";
import boxes from "../../img/click.png";
import mic from "../../img/mic.png";
import { MdOutlineSettings } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";
import MyModal from "../MyModal/MyModal";

function Navbar() {
  let params = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [navBar, setnavBar] = useState(false);
  const [inputVal, setInputVal] = useState(params.id);
  let navigate = useNavigate();
  const searchEnter = async (e) => {
    e.preventDefault();
    let searchValue = await e.target[0].value.replace(/[^a-zA-Z0-9 ]/g, "");
    if (searchValue) {
      navigate(`/${searchValue}/all`);
    }
  };
  useEffect(() => {
    setInputVal(params.id);
    setModalShow(false);
  }, [params.id]);
  const updateLogo = () => {
    if (window.scrollY >= 100) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };
  window.addEventListener("scroll", updateLogo);

  return (
    <div className={navBar ? "mainNav navSticky" : "mainNav"}>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className={navBar ? "navLeft navLeftSticky" : "navLeft"}>
        <Link to={"."}>
          <img src={googleImg} alt="Logo" className="smallLogo"></img>
        </Link>
        <form onSubmit={searchEnter}>
          <div className="secondSearchBar">
            <input
              className="secondSearchInput"
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
              type="text"
            ></input>
            <img className="secondMicIcon" src={mic} alt="micIcon" onClick={() => setModalShow(true)}></img>
            <button className="secondNavSearch" type="submit">
              <ImSearch className="secondSearchIcon" />
            </button>
          </div>
        </form>
      </div>
      <div className={navBar ? "navRight navRightSticky" : "navRight"}>
        <span className="secondNavBlock noMargin">
          <MdOutlineSettings className="settings" />
        </span>
        <span className="secondNavBlock">
          <img className="secondNavBox" src={boxes} alt="moreIcon"></img>
        </span>
        <img className="secondNavImg" src={userImage} alt="userImage"></img>
      </div>
    </div>
  );
}

export default Navbar;
