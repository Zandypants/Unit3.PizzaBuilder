import { useState } from "react";
import { samplePizza } from "./App"

function PizzaForm ({addPizza}) {
  const [newPizza, setNewPizza] = useState(samplePizza);

  const onInputChange = (event) => {
    const editPizza = {...newPizza};
    editPizza[event.target.name] = event.target.value;
    setNewPizza(editPizza);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    addPizza(newPizza);

    const inputs = event.target.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
  }

  return <form className="containerItem" onSubmit={onSubmit}>
    <h2 style={{color:"green"}}>Custom</h2>
      <p>(separate multiple inputs with a comma)</p>
    { Object.keys(samplePizza).map((k, i) => {
        return <div key={i} className="inputLine">
          <label htmlFor={k}>{k}: </label>
          <input type="text" name={k} onChange={onInputChange}></input>
        </div>
      })
    }
    <input type="submit" value="Add your pizza!"></input>
  </form>
}

export default PizzaForm