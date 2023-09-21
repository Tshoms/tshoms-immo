import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom';
import Banner from './Banner';


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
  // const userName = searchParams.get("userName");


  useEffect(() => {
  }, [])

  return (

    <HomeStyled>
      <Banner />
    </HomeStyled>
  )

}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  
`;

export default Home