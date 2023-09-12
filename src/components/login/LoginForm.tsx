import styled from "styled-components"
import { useState } from "react";
import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";



const LoginForm: React.FC = () => {
    // state ---------
    const [userName, setUserName] = useState<string>("");

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
        // console.log("value of username", userName);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        navigate({
            pathname: "/Home/:username",
            search: createSearchParams({
                userName: userName,
            }).toString(),
        });
        setUserName("");


    }

    return (
        <LoginFormStyled>
            <h1>login</h1>
            <input type="text" placeholder="entrez votre prénom..." onChange={handleChange} value={userName} />
            <button onClick={handleClick}>Accèder à la page.</button>
        </LoginFormStyled>
    )

}

const LoginFormStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
width: 300px;
border: 1px solid black;
  
`;

export default LoginForm