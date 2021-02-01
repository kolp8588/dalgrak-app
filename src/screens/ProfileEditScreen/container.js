import React, { Component } from "react";

import ProfileEditScreen from "./presenter";

class Container extends Component {
  state = {
  };

  render() {
    return (
      <ProfileEditScreen
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default Container;
