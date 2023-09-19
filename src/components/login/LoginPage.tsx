import React from "react";
import './LoginPage.css';
import LoginForm from "./LoginForm";
import immofirst from "../../assets/video/immovideofirst.mp4";





const LoginPage = () => {
    // state -----------

    return (
        <div className="main-home">
            <div className="overlay"></div>
            <video src={immofirst} autoPlay loop muted></video>

            <div className="content">
                <h1>Tshoms Immobilier</h1>
                <h2>Bienvenue sur mon site web</h2>
                <hr />
                <LoginForm />
            </div>
        </div>
    )

}



export default LoginPage