import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import emojiContext from '../context/emoji/emojiContext';
const ContenedorForm=styled.div`
    margin: 2rem auto;
    max-width: 30rem;
    border:1px solid #8aeccf;
    padding: 1.5rem;
    border-radius:10px;
    @media(max-width:450px){
        margin-right:1rem;
        margin-left:1rem;
    }
`;
const H1=styled.div`
    margin: 0;    
    font-size: 1.5rem;
    @media(min-width:450px){
        font-size: 2.5rem;
    }
`;

const Formulario = () => {
    //guardar el state global de emoji
    const {buscarEmojis, activarLoading}= useContext(emojiContext);    
    
    //declarar un state local
    const [nombre, guardarNombre]=useState('');
    const [errorLocal, confirmarErrorLocal]=useState(false);

    const preparaBusqueda=e=>{
        e.preventDefault();
        
        //validación
        if(nombre.trim()===''){
            //alert('Error');
            confirmarErrorLocal(true);
            return;
        }

        //pasa la validación
        confirmarErrorLocal(false);

        //buscar los emojis y activar el spinner de carga
        activarLoading();
        buscarEmojis(nombre);
        
        //limpiar el formulario
        guardarNombre('');
    }
    const claseLabel= errorLocal? "font-weight-bold text-danger" : "";
    return ( 
        <ContenedorForm>
            <H1 className="text-center mb-3 text-secondary">
                Search an emoji <i className="fas fa-search-plus"></i>
            </H1>
            <form onSubmit={preparaBusqueda} >
                <div className="form-group">
                    <label htmlFor="nombre" className={claseLabel}>
                        Write Something
                    </label>
                    <input className="form-control"
                        placeholder="Ex. smile"
                        id="nombre"
                        value={nombre}
                        onChange={(e)=>guardarNombre(e.target.value)}
                    type="text"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Search</button>
            </form>
        </ContenedorForm>
     );
}
 
export default Formulario;