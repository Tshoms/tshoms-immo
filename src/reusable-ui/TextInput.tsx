import styled from "styled-components"
import React, { ComponentPropsWithoutRef } from "react";

type TextInputProps = {
    value: string;
} & ComponentPropsWithoutRef<"div">

const TextInput = ({ onChange, value, ...props }: TextInputProps) => {


    // state -------------
    return (
        <TextInputStyled {...props} >
            <input type="text" placeholder="Entrez votre prénom..." onChange={onChange} value={value} />
        </TextInputStyled>
    )

}

const TextInputStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  background-color: white;
  border: 2px solid black;
  margin-bottom: 15px;
  border-radius: 10px;
  

  input {
    width: 80%;
    border: none;
  }
  
`;


export default TextInput