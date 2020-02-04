import React from "react";
import GridArea from "../IndivPage/NewContainer";
import Banner from "../IndivPage/banner";
import DestText from "../IndivPage/destText";
import Food from "../IndivPage/Food";
import Destinations from "../IndivPage/destinations";
import Iconic from "../IndivPage/Iconic";
import { Link } from "react-router-dom";

const Osaka = () => {
  return (
    <GridArea>
      <Banner>
        <img
          src="https://images.pexels.com/photos/2070028/pexels-photo-2070028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="hello"
        ></img>
      </Banner>
      <DestText>
        <h2> Osaka</h2>
      </DestText>
      <Food>
        <Link to="/OsakaFoodList" target="_blank">
          <img src="/photos-touse/souffle.png" alt="Mochi "></img>
        </Link>
      </Food>

      <Destinations>
        <video
          src="/video/Kyoto-city.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      </Destinations>
      <Iconic>
        <Link to="/OsakaDestinations" target="_blank">
          <img src="/photos-touse/river.png" alt="Image failed to load"></img>
        </Link>
      </Iconic>
    </GridArea>
  );
};

export default Osaka;
