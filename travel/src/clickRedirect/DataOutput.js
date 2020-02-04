import React, { Component } from "react";

import Tour from "../Foodstyles/articleStyle";
import ImgContain from "../Foodstyles/imgContainer";
import TextDetails from "../Foodstyles/TextDetail";

export default class DataOutput extends Component {
  state = {};
  render() {
    const { city, img, name, info } = this.props.item;
    return (
      <Tour>
        <ImgContain>
          <img src={img} alt="failed to load"></img>
        </ImgContain>
        <TextDetails>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h4>{info}</h4>
        </TextDetails>
      </Tour>
    );
  }
}
