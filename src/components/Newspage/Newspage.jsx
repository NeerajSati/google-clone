import React from 'react';
import './newspage.css';
import Navbar from '../Navbar/Navbar';
import Appbar from '../Appbar/Appbar';
import Newsresult from '../Newsresult/Newsresult';

function Newspage() {
    return (
        <div>
        <Navbar/>
        <Appbar/>
        <div className="mainContent">
        <div className="fetchTime">About 13,590,000,000 results in (0.56 seconds)</div>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        <Newsresult/>
        </div>
        </div>
    )
}

export default Newspage
