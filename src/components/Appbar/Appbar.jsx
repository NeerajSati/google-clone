import React, {useState, useEffect} from 'react'
import './appbar.css'
import { BiImage, BiNews, BiSearch } from 'react-icons/bi';
import { RiVideoLine } from 'react-icons/ri';
import { Link, useParams } from "react-router-dom";

function Appbar() {
    const params = useParams();
    const [allBlue,setAllBlue] = useState(false);
    const [imagesBlue,setImagesBlue] = useState(false);
    const [videosBlue,setVideosBlue] = useState(false);
    const [newsBlue,setNewsBlue] = useState(false);
    const selectMethod =window.location.pathname.split("/")[2];
    useEffect(() => {
    switch(selectMethod){
                    case "all": setAllBlue(true);
                                break;
                    case "images": setImagesBlue(true);
                                break;
                    case "videos": setVideosBlue(true);
                                break;
                    case "news": setNewsBlue(true);
                                break;
        default: break;
    }
    }, [selectMethod])
    return (
        <div className="appbar">
        <Link to={`/${params.id}/all`}><span className={allBlue ? "appComp appCompBlue" : "appComp"}><BiSearch className="appbarIcon"/>All</span></Link>
        <Link to={`/${params.id}/images`}><span className={imagesBlue ? "appComp appCompBlue" : "appComp"}><BiImage className="appbarIcon"/>Images</span></Link>
        <Link to={`/${params.id}/videos`}><span className={videosBlue ? "appComp appCompBlue" : "appComp"}><RiVideoLine className="appbarIcon"/>Videos</span></Link>
        <Link to={`/${params.id}/news`}><span className={newsBlue ? "appComp appCompBlue" : "appComp"}><BiNews className="appbarIcon"/>News</span></Link>
        </div>
    )
}

export default Appbar
