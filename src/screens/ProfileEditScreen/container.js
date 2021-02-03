import React, { Component } from "react";

import ProfileEditScreen from "./presenter";

class Container extends Component {
  state = {
    setPassword:false,
    phoneNumber:"",
    username:"",
    password:""
  };

  render() {
    return (
      <ProfileEditScreen
        {...this.state}
        {...this.props}
        editPassword={this._editPassword}
        profileSubmit={this._profileSubmit}
      />
    );
  }

  _editPassword = (text) => {
    this.setState({
      setPassword: true,
    });
  };

  _profileSubmit = async () => {

    const { submitProfile } = this.props;
    const { phoneNumber,username,password } = this.state;

    const param = {
      username,
      password,
      phoneNumber

    };

    const uploadResult = await submitProfile(param);
    if (uploadResult) {
      this.props.navigation.goBack();
    }
  };
}



export default Container;
