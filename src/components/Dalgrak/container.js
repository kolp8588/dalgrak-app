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
        parseDate={this._parseDate}
        {...this.props}
        {...this.state}
      />
    );
  }
  _parseDate = (date) => {
    const words = date.split(" ");
    let result = "";
    for (let i = 0; i <= 3; i++) {
      result = result.concat(words[i]);
      if (i != 3) {
        result = result.concat("/");
      }
    }
    return result;
  };
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
