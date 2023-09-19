import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom';
import axios from "axios"

// type PostData = {
//     method: string,
//     url: string,
//     params: string[],
//     headers: string[],
// }

const Home = () => {
    // state --------------
    const [location, setLocation] = useState<any>()
    console.log(location);
    // comportement -----------
    const [searchParams] = useSearchParams();
    const userName = searchParams.get("userName");


    useEffect(() => {
    }, [])

    return (

        <HomeStyled>
            <h1>Hello : {userName} !!!</h1>
            <h3>Don't panic Home page in process :) !!!</h3>
        </HomeStyled>
    )

}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
      color: black;
  }

  h3{
    font-family: 'Caveat', cursive;
    font-size: 50px;
  }
`;

export default Home