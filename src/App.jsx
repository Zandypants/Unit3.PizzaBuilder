import { useState } from 'react'
import Pizza from './Pizza.jsx'
import PizzaForm from './PizzaForm.jsx'
import './App.css'

export const samplePizza = { name: "Nameless", sauce: "none", cheese: "none", toppings: ["none"] };
const cheese = "mozarella";
const sauce = "marinara";
const startingPizzas = [
  { name: "Pepperoni", sauce, cheese, toppings: ["pepperoni"] },
  { name: "Chicken Alfredo", sauce: "alfredo", cheese: "provolone", toppings: ["chicken", "mushroom"] },
  { name: "Hawaiian", sauce, cheese, toppings: ["ham", "pineapple"] },
];

function App() {
  const [pizzas, setPizzas] = useState(startingPizzas);

  const addPizza = (pizza) => {
    setPizzas([...pizzas, pizza]);
  }

  const removePizza = (index) => {
    setPizzas([...pizzas.slice(0, index), ...pizzas.slice(index+1, pizzas.length)]);
  }

  return (
    <>
      <h1>Build your own pizza!</h1>
      <section className='container'>
        <PizzaForm addPizza={addPizza} />
        {pizzas.map((pizza, i) => <Pizza key={i} pizza={pizza} removeSelf={()=>removePizza(i)}></Pizza>)}
      </section>
    </>
  )
}

export default App
