import React, { Component } from "react";

import EventScreen from "./presenter";

class Container extends Component {
  state = {
  };

  render() {
    return (
      <EventScreen
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default Container;
