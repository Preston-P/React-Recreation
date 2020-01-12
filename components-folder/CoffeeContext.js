import React, { useState, Component } from "react";
import Coffee from "./coffee";
import Menu from "../Home-components/menu";

function CoffeeContext() {
  const [coffees, setCoffees] = useState([
    { type: "Fruity", descr: "light roast" },
    { type: "Biscuit", descr: "medium roast" },
    { type: "Chocolate", descr: "medium light roast" },
    { type: "Earthy", descr: "dark roast" }
  ]);

  const handleSubmit = event => {
    // console.log(coffees.type);
    event.preventDefault();
  };

  const handleChange = event => {
    //setCoffees({ type: event.target.value });
    event.persist();

    setCoffees(prevCoffees => [...prevCoffees, { type: event.target.value }]);

    event.target.value === "Chocolate"
      ? console.log(event.target.value)
      : console.log("not Chocolate");

    const filterTaste = coffees
      .filter(item => item.type === event.target.value)
      .map(item => <ul key={item.type}>{item.descr}</ul>);

    console.log(filterTaste);
  };

  /*   const filterTaste = coffees
    .filter(coffee => coffee.type === "Chocolate")
    .map(coffee => <div>{coffee.descr}</div>); */

  /* What i want to do with filter taste is to reach 
    all the items of type and desr and set the target value and filter that
    and then map to the specific descr of the coffees .type
    might need to use spread operator
         
    */

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Menu onChange={handleChange} value={coffees.type}>
          <option value="Fruity">Fruity</option>
          <option value="Biscuit">Biscuit/Malt</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Earthy">Earthy</option>
        </Menu>
        <input type="submit" value="submit"></input>
      </label>
      <div></div>
    </form>
  );
}

export default CoffeeContext;

/* The main  information that is passed through the context and is passed down 
to other componnents  */

/* Will output all 3 of drip, espresso, and cold brew and their descriptions */
