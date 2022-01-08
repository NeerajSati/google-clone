import React from 'react';
import './navbar.css';
import userImage from '../../img/user.jpg';
import boxes from '../../img/click.png'
import { MdOutlineSettings } from 'react-icons/md';

function Mainheader() {
    return (
        <div className="navbar">
        <span className='navBlock noMargin'><MdOutlineSettings className="settings"/></span>
            <span className='navBlock'><img className="navBox" src={boxes} alt="moreIcon"></img></span>
            <img className="navImg" src={userImage} alt="userImage"></img>
        </div>
    )
}

export default Mainheader
