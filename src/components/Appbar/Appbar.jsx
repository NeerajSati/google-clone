import React from 'react'
import './appbar.css'
import { BiImage, BiNews, BiSearch } from 'react-icons/bi';
import { RiVideoLine, RiBookMarkLine } from 'react-icons/ri';


function appbar() {
    return (
        <div className="appbar">
        <span className="appComp"><BiSearch className="appbarIcon"/>All</span>
        <span className="appComp"><BiImage className="appbarIcon"/>Images</span>
        <span className="appComp"><RiVideoLine className="appbarIcon"/>Videos</span>
        <span className="appComp"><BiNews className="appbarIcon"/>News</span>
        <span className="appComp"><RiBookMarkLine className="appbarIcon"/>Books</span>
        </div>
    )
}

export default appbar
