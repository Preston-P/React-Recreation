import React, { Component } from "react";
import SectionStyle from "../Foodstyles/ListStyle";
import DataOutput from "../clickRedirect/DataOutput";
import Yotheviews from "../SiteViews/OsakaDest";

export default class OsakaViews extends Component {
  state = {
    info: Yotheviews
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
