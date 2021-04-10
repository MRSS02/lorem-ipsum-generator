import logo from './logo.svg';
import './App.css';
import LoremWindow from "./LoremWindow"
import ReactDOM from "react-dom"
import React, { useState } from "react"

function App() {

  const [textCount, setTextCount] = useState(0);
  const [inputValue, setInputValue] = useState(0)
  function setQuantity(value) {
    setInputValue(value.target.value)
  }
  function evalTextCount() {
    if (inputValue <= 0) alert("Selecione uma numeração válida!");
    else if (inputValue > 11) alert("Não podemos gerar mais de 10 parágrafos por vez!");
    else setTextCount(inputValue);
  }

  function setCountZero() {
    setTextCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
       <div id="title">
        <h1>Gerador de Lorem Ipsum</h1>
       </div>
        <LoremWindow quantity={textCount} />
        <p>Num clique de um botão, gere múltiplos parágrafos de Lorem Ipsum!</p>
        <input id="quantity"
        onChange={setQuantity}
        placeholder="Digite quantos parágrafos você quer..."></input>
        <button class="generate" onClick={evalTextCount}>Gerar Lorem Ipsum</button>
        <button class="generate marginBottom" onClick={setCountZero}>Apagar</button>

      </header>
    </div>
  );
}

export default App;
