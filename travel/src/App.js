import React from "react";
import Nav from "./components/navigationList";
import LandingPage from "./LandingPage";
import Kyoto from "./loadPages/Kyoto";
import FoodList from "../src/clickRedirect/FoodList";
import IconicDestinations from "../src/clickRedirect/IconicDestination";

import Osaka from "../src/loadPages/Osaka";
import OsakaList from "../src/clickRedirect/OsakaFood";
import OsakaViews from "../src/SiteViews/OsakaViews";

import Jeju from "../src/loadPages/Jeju";
import JejuList from "../src/clickRedirect/JejuFood";
import JejuViews from "../src/SiteViews/JejuDests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Kyoto" component={Kyoto} />
          <Route path="/FoodList" exact component={FoodList} />
          <Route
            path="/IconicDestinations"
            exact
            component={IconicDestinations}
          />

          <Route path="/Osaka" component={Osaka} />
          <Route path="/OsakaFoodList" exact component={OsakaList} />
          <Route path="/OsakaDestinations" exact component={OsakaViews} />

          <Route path="/Jeju" component={Jeju} />
          <Route path="/JejuFoodList" exact component={JejuList} />
          <Route path="/JejuDestinations" exact component={JejuViews} />
        </Switch>

        {/* <FoodList></FoodList> */}
      </div>
    </Router>
  );
}

export default App;
