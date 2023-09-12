import React from 'react';
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom';

const Home: React.FC = () => {
    // state --------------
    const [searchParams] = useSearchParams();
    const userName = searchParams.get("userName");
    console.log("value of userName:", userName);

    return (
        <HomeStyled><p>Hello user {userName} !!!</p></HomeStyled>
    )

}

const HomeStyled = styled.div`
  
`;

export default Home