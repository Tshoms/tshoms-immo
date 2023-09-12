import styled from "styled-components"
import React from "react";
import LoginForm from "./LoginForm";




const LoginPage: React.FC = () => {
    return (
        <LoginPageStyled>

            <h1>Hello LoginPage !!!</h1>

            <LoginForm />
        </LoginPageStyled>
    )

}

const LoginPageStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
`;

export default LoginPage