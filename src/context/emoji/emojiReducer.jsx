import {
    BUSQUEDA_EMOJI_ERROR,
    BUSQUEDA_EMOJI,
    EMOJI_NO_RESULTADOS,
    LOADING_BUSQUEDA
} from '../../types';

export default (state,action)=>{
    switch(action.type){
        case BUSQUEDA_EMOJI:
            return{
                ...state,
                loading:false,
                listaEmojis: action.payload,
                emojiNoResultados:false,
                errorBusqueda:false
                
            }
        case BUSQUEDA_EMOJI_ERROR:
            return{
                ...state,
                loading:false,
                listaEmojis:[],
                errorBusqueda:true
                
            }
        case EMOJI_NO_RESULTADOS:
            return{
                ...state,
                loading:false,
                listaEmojis:[],
                emojiNoResultados:true
                
            }
        case LOADING_BUSQUEDA:
            return{
                ...state,
                loading: true,
                listaEmojis:[],
                emojiNoResultados:false,
                errorBusqueda:false
            }
        default: return state;
    }
}