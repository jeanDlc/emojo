import React,{Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import EmojiState from './context/emoji/emojiState';
import ListaEmojis from './components/ListaEmojis';
import Footer from './components/Footer';

function App() {

  
  return (
    <Fragment>
      <EmojiState>
        <Header titulo="Emojo"/>
        <Formulario/>
        <ListaEmojis/>
        <Footer/>
      </EmojiState>
    </Fragment>
  );
}

export default App;
