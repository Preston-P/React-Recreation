import React, { Component } from "react";
import SectionStyle from "../Foodstyles/ListStyle";
import DataOutput from "./DataOutput";

import siteData from "../clickRedirect/siteSeeing";

export default class IconicDestinations extends Component {
  state = {
    info: siteData
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
