import React, { Component } from "react";

import NotificationScreen from "./presenter";

class Container extends Component {
  state = {
  };

  render() {
    return (
      <NotificationScreen
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default Container;
