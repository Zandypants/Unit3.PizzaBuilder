function Pizza ({pizza, removeSelf}) {
  const displayKeys = Object.keys(pizza);
  displayKeys.splice(displayKeys.indexOf("name"), 1);

  return  <section className="containerItem">
    <h2>{pizza.name}</h2>
    { displayKeys.map((k, i) => <div key={i}>{k}: {pizza[k].toString()}</div>) }
    <button onClick={removeSelf} style={{color:"red", alignSelf:"flex-end"}}>X</button>
  </section>
}

export default Pizza