import styled from "styled-components"
import { useState } from "react";
import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import TextInput from "src/reusable-ui/TextInput";




const LoginForm = () => {
    // state ---------
    const [userName, setUserName] = useState<string>("");

    const navigate = useNavigate();
    // React.ChangeEvent<HTMLInputElement>
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleChange :", event.target.value);
        setUserName(event.target.value)

    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

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
            <p>login</p>
            {/* <input type="text" placeholder="entrez votre prénom..." onChange={handleChange} value={userName} /> */}
            <TextInput onChange={handleChange} value={userName} />
            <button onClick={handleClick}>Accèder à la page.</button>
        </LoginFormStyled>
    )

}

const LoginFormStyled = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
width: 30%;
border: 3px solid white;
/* border-radius: 20%; */
  
`;

export default LoginForm