import React, {useReducer} from 'react';
import emojiContext from './emojiContext';
import {
    BUSQUEDA_EMOJI_ERROR,
    BUSQUEDA_EMOJI,
    EMOJI_NO_RESULTADOS,
    LOADING_BUSQUEDA
} from '../../types';
import emojiReducer from './emojiReducer';
import axios from 'axios';

const EmojiState=props=>{
    const initialState={        
        listaEmojis: [],
        errorBusqueda: false,
        emojiNoResultados:false,
        loading:false
    }
    const [state, dispatch]=useReducer(emojiReducer , initialState);

    //funciones
   
    //consultar la api mediante axios
    const buscarEmojis=async nombre=>{
        try {
            const key='cab38eb54374c2ab4d2ae145604157929c548320';
            const url=`https://emoji-api.com/emojis?search=${nombre}&access_key=${key}`;
            const resultado=await axios.get(url);
            
            if(resultado.data){
                dispatch({
                    type:BUSQUEDA_EMOJI,
                    payload: resultado.data
                });
            }else{
                dispatch({
                    type:EMOJI_NO_RESULTADOS
                });
            }
            
        } catch (error) {
            dispatch({
                type:BUSQUEDA_EMOJI_ERROR
            });
        }
        
    }

    //activar el loading
    const activarLoading=()=>{
        dispatch({
            type:LOADING_BUSQUEDA
        })
    }

    return(
        <emojiContext.Provider
            value={{                
                listaEmojis:state.listaEmojis,
                errorBusqueda:state.errorBusqueda,
                emojiNoResultados:state.emojiNoResultados,
                loading:state.loading,
                buscarEmojis,
                activarLoading
            }}
        >
            {props.children}
        </emojiContext.Provider>
    )
}
export default EmojiState;