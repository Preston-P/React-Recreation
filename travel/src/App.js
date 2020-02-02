import React from "react";
import Nav from "./components/navigationList";
import LandingPage from "./LandingPage";
import Kyoto from "./loadPages/Kyoto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Kyoto" component={Kyoto} />
          {/*  <Route path="/Osaka" component={Osaka} />
          <Route path="/Jeju" component={Jeju} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
