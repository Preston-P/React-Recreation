import React from "react";
import Grid from "./components/grid";
import Img1 from "./gridFolder/img1";
import Img2 from "./gridFolder/img2";
import Img3 from "./gridFolder/img3";
import Caption from "./gridFolder/we";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Grid>
      <Caption>
        <h3> Click to learn more about these destinations</h3>
      </Caption>
      <Img1>
        <Link to="/Kyoto" target="_blank">
          <h1>Kyoto</h1>
          <img src="/photos-touse/singapore.png"></img>
        </Link>
      </Img1>
      <Img2>
        <Link to="/Osaka" target="_blank">
          <h1>Osaka</h1>
          <img src="/photos-touse/tower.jpg"></img>
        </Link>
      </Img2>

      <Img3>
        <Link to="/Jeju" target="_blank">
          <h1>Jeju</h1>
          <img src="photos-touse/flowers.png"></img>
        </Link>
      </Img3>
    </Grid>
  );
};

export default LandingPage;
