import React, { Component } from "react";

import ProfileEditScreen from "./presenter";

class Container extends Component {
  state = {
    setPassword:false
  };

  render() {
    return (
      <ProfileEditScreen
        {...this.state}
        {...this.props}
        editPassword={this._editPassword}
      />
    );
  }

  _editPassword = (text) => {
    this.setState({
      setPassword: true,
    });
  };
}



export default Container;
