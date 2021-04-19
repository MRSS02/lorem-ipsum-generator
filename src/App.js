import logo from './logo.svg';
import './App.css';
import LoremWindow from "./LoremWindow"
import ReactDOM from "react-dom"
import React, { useState } from "react"

function App() {

  const ipsumData = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "proin", "vehicula", "neque", "eu", "tempus", "sollicitudin", "lectus", "arcu",
  "fermentum", "eros", "in", "tempor", "ex", "leo", "quis", "libero",
  "donec", "tristique", "massa", "rhoncus", "finibus", "pulvinar", "vestibulum", "tristique",
  "velit", "ac", "augue", "iaculis", "nec", "tincidunt", "facilisis", "id",
  "suscipit", "purus", "pellentesque", "felis", "eleifend", "ut", "est", "at",
  "faucibus", "eleifend", "magna", "integer", "blandit", "ornare", "dui", "cursus",
  "urna", "aliquet", "porta", "erat", "vitae", "tincidunt", "odio", "congue",
  "praesent", "tristique", "accumsan", "sed", "aliquam", "a", "orci", "non",
  "mollis", "usce", "porttitor", "orci", "pharetra", "ullamcorper", "iaculis", "turpis",
  "nisl", "egestas", "nulla", "justo", "enim", "suspendisse", "ac", "ante",
  "tortor", "viverra", "mauris", "nam", "dapibus", "velit", "rutrum", "condimentum",
  "accumsan", "faucibus", "nibh", "sem", "vel",
  ]

  let contentPreview = []
  const [wordCount, setWordCount] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [content, setContent] = useState([])
  function setParagraphQuantity(value) {
    setInputValue(value.target.value)
  }
  function setWordQuantity(value) {
    setWordCount(value.target.value)
  }
  function addWord(x, y) {
    let word = ipsumData[Math.floor(Math.random() * 100)]
    if (y == 0) word = word[0].toUpperCase() + word.substring(1)
    contentPreview[x] += word;
    contentPreview[x] += " ";
  }
  function evalTextCount() {
    for (let x = 0; x < inputValue; x++) {
      contentPreview[x] = ""
     for (let y = 0; y < wordCount; y++) addWord(x, y)
    }

    setContent(contentPreview);
    if (inputValue <= 0) alert("Selecione uma numeração válida!");
    else if (inputValue >= 11) alert("Não podemos gerar mais de 10 parágrafos por vez!");
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
        <LoremWindow quantity={textCount} content={content} />
        <p>Num clique de um botão, gere múltiplos parágrafos de Lorem Ipsum!</p>
        <input className="quantity"
        onChange={setWordQuantity}
        placeholder="Digite quantas palavras você quer..."></input>
        <input className="quantity"
        onChange={setParagraphQuantity}
        placeholder="Digite quantos parágrafos você quer..."></input>
        <button class="generate" onClick={evalTextCount}>Gerar Lorem Ipsum</button>
        <button class="generate marginBottom" onClick={setCountZero}>Apagar</button>

      </header>
    </div>
  );
}

export default App;
