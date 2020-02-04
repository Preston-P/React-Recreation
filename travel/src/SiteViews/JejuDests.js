import React, { Component } from "react";
import SectionStyle from "../Foodstyles/ListStyle";
import DataOutput from "../clickRedirect/DataOutput";

import siteData from "../SiteViews/Jejuview";

export default class JejuViews extends Component {
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
