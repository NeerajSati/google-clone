import React from 'react';
import './mainheader.css';
import userImage from '../../img/user.jpg';
import boxes from '../../img/click.png'

function Mainheader() {
    return (
        <div className="mainheader">
            <span className="navText">Gmail</span>
            <span className="navText">Images</span>
            <span className='navBlock'><img className="navBox" src={boxes} alt="moreIcon"></img></span>
            <img className="navImg" src={userImage} alt="userImage"></img>
        </div>
    )
}

export default Mainheader
