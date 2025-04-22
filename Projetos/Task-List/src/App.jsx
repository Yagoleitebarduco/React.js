import { useState } from 'react'
import ItemsContainer from './itemsContainer'
import AddItemsContainer from './AddItemsContainer'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState(['Lavar a Roupa', 'Ir ao Mercado', 'Limpar o Quarto'])

  const removeFromList = (item) => {
    const newList = [...taskList]; // Spread ( Quebrar Cada um e Atribuir cada um ao indice );
    const itemIndex = newList.indexOf(item); // Indicador do Indice;

    newList.splice(itemIndex, 1) // Splice tem que Indicar a Quantidade que Você quer Exibir

    setTaskList(newList);
  }

  const addToList = (item) => {
    // const newList = [...taskList]
    // newList.push(item)

    // setTaskList(newList)


    setTaskList([...taskList, item]);
  }

  return (
    <div>
      <h1>Minha Lista de Tarefas do Dia</h1>
      <AddItemsContainer addToList={addToList}/>
      <ItemsContainer taskList={taskList} removeFromList={removeFromList}/>
    </div>
  )
}

export default App
