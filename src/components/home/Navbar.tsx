import React from "react"
import styled from "styled-components"



const Navbar = () => {
    return (
        <NavbarStyled>
            <p>New York</p>
            <p>Los Angeles</p>
            <p>Miami</p>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  border:1px solid yellow;
  top: 90;
  position: absolute;

  p{
          color: white;
          font-size: 25px;
      }

  
`;


export default Navbar