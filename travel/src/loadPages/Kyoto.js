import React from "react";
import GridArea from "../IndivPage/NewContainer";
import Banner from "../IndivPage/banner";
import DestText from "../IndivPage/destText";
import Food from "../IndivPage/Food";

const Kyoto = () => {
  return (
    <GridArea>
      <Banner>
        <img src="/photos-touse/singapore.png" alt="hello"></img>
      </Banner>
      <DestText>
        <h2> Kyoto</h2>
      </DestText>
      <Food>
        <img src="photos-touse/korea.png"></img>
      </Food>
    </GridArea>
  );
};

export default Kyoto;
