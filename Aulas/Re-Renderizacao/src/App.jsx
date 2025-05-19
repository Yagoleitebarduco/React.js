import { useState } from 'react';
import './App.css';
import DualColorTitle from './DualColorTitle';

function App() {
  const [textTitle, settextTitle] = useState('Muda')

  const changeTitle = () => {
    settextTitle(textTitle + 'a');
  }

  return (
    <div>
      <button onClick={changeTitle}>Mudar Texto</button>
      <DualColorTitle title={textTitle} />
    </div>
  )
}

export default App
