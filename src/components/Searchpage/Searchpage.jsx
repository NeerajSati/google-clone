import React from 'react';
import './searchpage.css';
import Navbar from '../Navbar/Navbar';
import Appbar from '../Appbar/Appbar';
import Allresults from '../Allresults/Allresults';

function Searchpage() {
    return (
        <div>
            <Navbar/>
            <Appbar/>
            <div className="mainContent">
            <div className="fetchTime">About 13,590,000,000 results in (0.56 seconds)</div>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            <Allresults/>
            
            </div>
        </div>
    )
}

export default Searchpage
