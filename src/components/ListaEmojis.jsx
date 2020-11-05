import React, { useContext} from 'react';
import emojiContext from '../context/emoji/emojiContext';
import Emoji from './Emoji';
import Spinner from './Spinner';
const ListaEmojis = () => {
    
    const {listaEmojis ,errorBusqueda,emojiNoResultados,loading}=useContext(emojiContext);
    
    return ( 
        <main className="container">
            <div className="bg-secondary p-3 mb-3 rounded">    
                         
                {listaEmojis.length>0? 
                    <div>
                        <h2 className="text center text-white text-center text-uppercase mb-3">
                        <i className="fas fa-list-alt"></i> emojis list
                        </h2>
                        <div className="row">
                            {
                                listaEmojis.map(emoji=>(
                                    <Emoji emoji={emoji} key={emoji.codePoint} />
                                ))
                            }
                        </div>
                    </div>
                    : 
                    <h2 className="text center text-white text-center text-uppercase">
                        Search Something
                    </h2>
                }                
                {loading? <Spinner/> : null}   
                {emojiNoResultados? 
                    <p className="bg-white p-3 text-center text-danger text-uppercase font-weight-bold">Not found</p> 
                : null}
                {errorBusqueda? 
                    <p className="bg-white p-3 text-center text-danger text-uppercase font-weight-bold">Upps.. Error</p>
                    : null}
            </div>
        </main>
     );
}
 
export default ListaEmojis;