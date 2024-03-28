function Pizza ({pizza, removeSelf}) {
  const displayKeys = Object.keys(pizza);
  displayKeys.splice(displayKeys.indexOf("name"), 1);

  return <section className="containerItem containerPizza">
    <h2>{pizza.name}</h2>
    <div>{ displayKeys.map((k, i) => <div key={i}>{k}: {pizza[k].toString()}</div>) }</div>
    <button onClick={removeSelf} style={{color:"red"}}>X</button>
  </section>
}

export default Pizza