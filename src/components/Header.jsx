import React from 'react';
import styled from '@emotion/styled';
const H1=styled.h1`
    font-family: 'Press Start 2P', cursive;
    margin:0;
    color:white;        
    @media(min-width:750px){
        font-size:4.3rem;
    }
`;
const P=styled.p`
    font-size:1.5rem;
    margin:0;
    color:white;
`;
const Header = ({titulo}) => {
    return ( 
        <div className="bg-primary p-3 text-center">
            <H1>{titulo}<i className="far fa-laugh-wink"></i></H1>
            <P>Your image search engine</P>
        </div>
     );
}
 
export default Header;