import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Dalgrak from "./presenter";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {};
  render() {
    return (
      <Dalgrak
        handlePress={this._handlePress}
        {...this.props}
        {...this.state}
      />
    );
  }
  _handlePress = () => {
    const { dispatchLike } = this.props;
    const { isLiked } = this.state;
    dispatchLike(isLiked);
    if (isLiked) {
      this.setState((prevState) => {
        return {
          isLiked: false,
          likeCount: prevState.likeCount - 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          isLiked: true,
          likeCount: prevState.likeCount + 1,
        };
      });
    }
  };
}

export default Container;