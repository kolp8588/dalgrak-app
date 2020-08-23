import React, { Component } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";

import DargrakBasicScreen from "./presenter";

class Container extends Component {
  state = {
    isSelected: false,
    depth: 0,
    parentCategory: null,
    item: null,
    category: null,
  };

  render() {
    return (
      <DargrakBasicScreen
        {...this.state}
        pickPhoto={this._pickPhoto}
        approvePhoto={this._approvePhoto}
        pickCategory={this._pickCategory}
      />
    );
  }
  _pickItem = (item) => {
    this.setState({
      pickedItem: item,
    });
  };
  _pickCategory = (depth) => {
    firebase
      .database()
      .ref("categories")
      .orderByChild("depth")
      .equalTo(depth)
      .on("value", (snapshot) => {
        let result = [];
        snapshot.forEach((snap) => {
          const item = snap.val();
          item.key = snap.key;
          result.push(item);
        });
        const {
          navigation: { navigate },
        } = this.props;
        navigate("Category", {
          depth: depth,
          categories: result,
        });
      });
  };

  _approveItem = () => {
    const {
      navigation: { navigate },
    } = this.props;
    const { pickedItem } = this.state;
    navigate("UploadPhoto", { item: pickedItem });
  };
}

export default Container;
