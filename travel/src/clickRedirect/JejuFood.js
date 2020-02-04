import React, { Component } from "react";
import SectionStyle from "../Foodstyles/ListStyle";
import DataOutput from "./DataOutput";

import siteData from "../foodData/JejuFood";

export default class JejuList extends Component {
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
