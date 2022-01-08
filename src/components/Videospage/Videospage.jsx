import React from 'react'
import './videospage.css'
import Navbar from '../Navbar/Navbar';
import Appbar from '../Appbar/Appbar';

function Videospage() {
    return (
        <div>
        <Navbar/>
        <Appbar/>
        <div className="mainContent">
        <div className="fetchTime">About 13,590,000,000 results in (0.56 seconds)</div>
        </div>
        </div>
    )
}

export default Videospage
