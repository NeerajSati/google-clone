import React from 'react'
import "./error404.css";
import Footer from "../Footer/Footer";
import ErrImg from '../../img/404.png';
function Error404() {
    return (
        <>
        <div className='error404'>
            <img src={ErrImg} className="errImg"></img>
        </div>
        <Footer />
        </>
    )
}

export default Error404
