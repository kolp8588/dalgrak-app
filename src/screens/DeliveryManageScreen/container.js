import React, { Component } from "react";

import DeliveryManageScreen from "./presenter";

class Container extends Component {
  state = {
  };

  render() {
    return (
      <DeliveryManageScreen
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default Container;
