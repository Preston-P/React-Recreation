import React from "react";
import Grid from "./components/grid";
import Img1 from "./gridFolder/img1";
import Img2 from "./gridFolder/img2";
import Img3 from "./gridFolder/img3";
import Caption from "./gridFolder/we";

const Kyoto = () => {
  return (
    <Grid>
      <Caption>Learn about these destinations</Caption>
      <Img1 src="/photos-touse/singapore.png"></Img1>
      <Img2 src="/photos-touse/tower.jpg"></Img2>
      <Img3 src="photos-touse/flowers.png"></Img3>
      <h1> Osaka</h1>
      <h2>Kyoto</h2>
      <section>Jeju-do</section>

      {/*    <Img2></Img2>
      <Img3></Img3> */}
    </Grid>
  );
};

export default Kyoto;
