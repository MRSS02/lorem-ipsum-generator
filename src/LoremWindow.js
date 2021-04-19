import "./index.css"
import ReactDOM from 'react-dom';


function LoremWindow(props) {

  let quantity = props.quantity;
  let quantityArr = [];
  for (let x = 0; x < quantity; x++) {
    quantityArr.push(props.content[x])
  }
  function renderTextContent(element) {
      return (
        <p className="LoremIpsum">
        {element}
        </p>
      )
  }

  let renderedText = (
    <div id="LoremWindow">
      {quantityArr.map((element) =>
        renderTextContent(element))}
    </div>
  );

  return renderedText;
}

export default LoremWindow;
