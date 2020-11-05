import React from 'react';
import styled from '@emotion/styled';
/**Styled components************************************************ */
const ParrafoEmoji=styled.p`
    font-size:3rem;
    margin:0;
    text-align:center;
`;
const NombreEmoji=styled.h3`
    color:#56cc9d;
    text-align:center;
    font-size:1.4rem;
    text-transform:capitalize;
`;
/**Componente********************************************************** */
const Emoji = ({emoji}) => {
    const {unicodeName, character}=emoji;
    return ( 
        <div className="col-md-3 rounded">
            <div className="bg-light p-3 mb-3 rounded">
                <NombreEmoji>{unicodeName} </NombreEmoji>
                <ParrafoEmoji>{character}</ParrafoEmoji>
            </div>
        </div>
     );
}
 
export default Emoji;