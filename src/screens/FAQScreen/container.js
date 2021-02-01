import React, { Component } from "react";

import FAQScreen from "./presenter";

class Container extends Component {
  state = {
  };

  render() {
    return (
      <FAQScreen
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default Container;
