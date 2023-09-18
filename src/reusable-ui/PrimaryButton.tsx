import styled from "styled-components"
import React, { ComponentPropsWithoutRef } from "react";


type ButtonProps = {
    label: string;
} & ComponentPropsWithoutRef<"button">

const PrimaryButton = ({ onClick, label }: ButtonProps) => {
    return (
        <PrimaryButtonStyled onClick={onClick}>
            <span>{label}</span>
        </PrimaryButtonStyled>
    )

}

const PrimaryButtonStyled = styled.button`
  padding: 12px 0px;
  width: 100%;
  border-radius: 10px;
  color: white;
  background-color: black;
  border: 2px solid white;

  /* :hover {
    
    color: black;
    background-color: white;
    border: 2px solid black;
    transition: all 200ms ease-out;
  } */
`;


export default PrimaryButton