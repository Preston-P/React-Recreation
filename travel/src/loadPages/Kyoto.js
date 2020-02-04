import React from "react";
import GridArea from "../IndivPage/NewContainer";
import Banner from "../IndivPage/banner";
import DestText from "../IndivPage/destText";
import Food from "../IndivPage/Food";
import Destinations from "../IndivPage/destinations";
import Iconic from "../IndivPage/Iconic";
import { Link } from "react-router-dom";

const Kyoto = () => {
  return (
    <GridArea>
      <Banner>
        <img src="/photos-touse/Kyoto.png" alt="hello"></img>
      </Banner>
      <DestText>
        <h2> Kyoto</h2>
      </DestText>
      <Food>
        <Link to="/FoodList" target="_blank">
          <img src="/photos-touse/sushi.png" alt="Mochi "></img>
        </Link>
      </Food>

      <Destinations>
        <video
          src="/video/waterfall.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      </Destinations>
      <Iconic>
        <Link to="/IconicDestinations" target="_blank">
          <img src="/photos-touse/Castle.png" alt="Image failed to load"></img>
        </Link>
      </Iconic>
    </GridArea>
  );
};

export default Kyoto;
