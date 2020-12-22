import React, { Component } from "react";
import DargrakSellerScreen from "./presenter";

class Container extends Component {
  render() {
    return <DargrakSellerScreen {...this.state} {...this.props} />;
  }
}

export default Container;
