import { useState } from 'react'
import './App.css'

const cheese = "mozarella";
const sauce = "marinara";
const startingPizzas = [
  { name: "Pepperoni", sauce, cheese, toppings: ["pepperoni"]},
  { name: "Chicken Alfredo", sauce: "alfredo", cheese: "provolone", toppings: ["chicken", "mushroom"]},
  { name: "Hawaiian", sauce, cheese, toppings: ["ham", "pineapple"]},
];

function App() {
  const [pizzas, setPizzas] = useState(startingPizzas);
  return (
    <>
      <h1>Add Pizzas here</h1>
    </>
  )
}

export default App
