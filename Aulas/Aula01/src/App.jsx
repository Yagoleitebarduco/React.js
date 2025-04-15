import { useState } from 'react';
import { Subtitulo } from './substitulo'; // Componente (Criar um Bloco de Codigo Prontos e Recepcionar no Main)
import './App.css'

function App() {
  const [numberRandom, swapNumberRandom] = useState();

  function changeNumberRandom() {
    swapNumberRandom(Math.random());
  }

  return (
    <div>
      <h1>Meu Primeiro Titulo com React {numberRandom}</h1>
      <Subtitulo name={'Yago'} age={35} height={1.72}/>
      <button onClick={changeNumberRandom}>Nove Numero Aleatorio</button>
    </div>
  )
}

export default App
