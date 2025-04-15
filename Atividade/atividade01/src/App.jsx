import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <h1>Yago Leite Barduco</h1>
      <h3>Tecnico de Informatica</h3>
      <hr />

      <p>
        <h4>Numero: (13) 9746-5192</h4>
        <h4>Email: yago.g4c2gmail.com</h4>
      </p>
      <hr />

      <h2>Objetivo</h2>
      <h4>Experiência de um primeiro emprego na área de tecnologia.</h4>

      <h2>FORMAÇÃO ACADÊMICA</h2>
      <h3>2017 - 2024 | escola estadual josé pachego lomba </h3>
      <h4>Ensino Médio Completo</h4>

      <h3>2023 - 2024 | senac</h3>
      <h4>Técnico em Informática</h4>

      <h3>2025 | senac (ocupação atual)</h3>
      <h4>Técnico em Informática para Internet</h4>

      <ul>
        <li>Montagem de computadores.</li>
        <li>Assistente de Desenvolvimento de Aplicativos Computacionais.</li>
        <li>Manutenção de redes locais de computadores.</li>
      </ul>
    </>
  )
}

export default App
