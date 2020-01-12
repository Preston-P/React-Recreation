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
    alert(`your favorite flavor is ${coffees.type}`);

    console.log("Handle submit has occured");
    console.log(coffees.type);
    console.log(coffees.descr);

    console.log(filterTaste);
    event.preventDefault();
  };

  const handleChange = event => {
    setCoffees({ type: event.target.value });
    console.log("Handle change has occured");
  };

  const handleOutput = () => {
    let numb = 3;
    console.log(numb);
  };
  const filterTaste = coffees
    .filter(coffee => coffee.type === "Chocolate")
    .map(coffee => <div>{coffee.descr}</div>);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Menu onChange={handleChange} value={(coffees.type, coffees.descr)}>
          <option value="Fruity">Fruity</option>
          <option value={coffees.descr}>Biscuit/Malt</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Earthy">Earthy</option>
        </Menu>
        <input type="submit" value="submit"></input>
      </label>
      <div>
        {" "}
        -Flavor profile to be placed here once submitted-
        {filterTaste}
      </div>
    </form>
  );
}

export default CoffeeContext;

/* The main  information that is passed through the context and is passed down 
to other componnents  */

/* Will output all 3 of drip, espresso, and cold brew and their descriptions */
