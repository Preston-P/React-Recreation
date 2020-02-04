import React, { Component } from "react";
import SectionStyle from "../Foodstyles/ListStyle";
import DataOutput from "./DataOutput";
import FoodData from "../foodData/KyotoFood";

export default class Foodlist extends Component {
  state = {
    info: FoodData
  };
  render() {
    const { info } = this.state;
    return (
      <SectionStyle>
        {info.map(item => {
          return <DataOutput key={item.id} item={item} />;
        })}
      </SectionStyle>
    );
  }
}
