import { samplePizza } from "./App"

function PizzaForm({ addPizza }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");

    const newPizza = { ...samplePizza };
    inputs.forEach(input => {
      if (input.type != "text" || input.value === "") return;

      newPizza[input.name] = input.value;
      input.value = "";
    });
    addPizza(newPizza);
  }

  return <form className="containerItem" onSubmit={onSubmit}>
    <h2 style={{ color: "green" }}>Custom</h2>
    <p>(separate multiple inputs with a comma)</p>
    {
      Object.keys(samplePizza).map((k, i) => {
        return <div key={i} className="inputLine">
          <label htmlFor={k}>{k}: </label>
          <input type="text" name={k}></input>
        </div>
      })
    }
    <input type="submit" value="Add your pizza!"></input>
  </form>
}

export default PizzaForm