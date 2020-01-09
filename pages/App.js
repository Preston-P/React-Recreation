import React from "react";
import Nav from "./nav";
import Brew from "./Brew";
import About from "./about";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/brew" component={Brew} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
