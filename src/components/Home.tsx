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
        const getApi = async () => {
            const options: any = {
                method: 'GET',
                url: 'https://realty-in-us.p.rapidapi.com/properties/list-sold',
                params: {
                    city: 'New York City',
                    state_code: 'NY',
                    offset: '0',
                    limit: '10',
                    sort: 'relevance'
                },
                headers: {
                    'X-RapidAPI-Key': 'af1affac82msh5641b348ae4a954p113040jsn5e22d843cd46',
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };
            getApi();


            const response = await axios.request(options);
            console.log(response.data);
            setLocation(response.data)
        }

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