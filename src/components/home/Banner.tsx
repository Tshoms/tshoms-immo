import React from "react"
import './Banner.css';
import immoLast from "../../assets/video/immovideotwo.mp4"
// import Navbar from "./Navbar";


const Banner = () => {
    return (
        <div className="banner">
            <video src={immoLast} autoPlay loop muted></video>
            <div className="content">
                <h1>Tshoms Immobilier</h1>
            </div>
            {/* <Navbar /> */}
        </div>
    )
}


export default Banner