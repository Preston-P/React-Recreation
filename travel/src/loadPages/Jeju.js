import React from "react";
import GridArea from "../IndivPage/NewContainer";
import Banner from "../IndivPage/banner";
import DestText from "../IndivPage/destText";
import Food from "../IndivPage/Food";
import Destinations from "../IndivPage/destinations";
import Iconic from "../IndivPage/Iconic";
import { Link } from "react-router-dom";

const Jeju = () => {
  return (
    <GridArea>
      <Banner>
        <img src="/photos-touse/Beach.png" alt="hello"></img>
      </Banner>
      <DestText>
        <h2> Jeju-do | South Korea</h2>
      </DestText>
      <Food>
        <Link to="/JejuFoodList" target="_blank">
          <img src="/photos-touse/cafe.png" alt="Mochi "></img>
        </Link>
      </Food>

      <Destinations>
        <video
          src="/video/Jeju.MOV"
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      </Destinations>
      <Iconic>
        <Link to="/JejuDestinations" target="_blank">
          <img
            src="/photos-touse/cover-photo.png"
            alt="Image failed to load"
          ></img>
        </Link>
      </Iconic>
    </GridArea>
  );
};

export default Jeju;
