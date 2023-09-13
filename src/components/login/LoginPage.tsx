import React from "react";
import './LoginPage.css';
import LoginForm from "./LoginForm";
import immofirst from "../../assets/video/immovideofirst.mp4";


// interface Props {
//     src: string,
//     autoPlay: boolean;
//     loop: boolean;
//     muted: boolean;
// }


const LoginPage: React.FC = () => {
    // state -----------

    // comportement ----------

    return (
        <div className="main-home">
            <div className="overlay"></div>
            <video src={immofirst} autoPlay loop muted></video>

            <div className="content">
                <h1>Tshoms Immobilier</h1>
                <h2>Welcome to my website</h2>
                <LoginForm />
            </div>
        </div>
    )

}



export default LoginPage