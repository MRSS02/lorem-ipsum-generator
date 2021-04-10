import "./index.css"
import LoremIpsum from "./LoremIpsum.js"
import ReactDOM from 'react-dom';


function LoremWindow(props) {

  let quantity = props.quantity;
  let quantityArr = [];
  for (let x = 0; x < quantity; x++) {
    quantityArr.push("a")
  }
  function renderTextContent() {
      return <LoremIpsum />
  }

  let renderedText = (
    <div id="LoremWindow">
      {quantityArr.map(() =>
        renderTextContent())}
    </div>
  );

  return renderedText;
}

export default LoremWindow;
