import React, { Component } from "react";

import CategoryScreen from "./presenter";
import * as firebase from "firebase";

class Container extends Component {
  state = {
    isSelected: false,
    item: null,
    categories: null,
  };
  render() {
    return (
      <CategoryScreen
        {...this.state}
        {...this.props.route.params}
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
  _pickCategory = (depth, parent) => {
    console.log("@@@@@@@@@@PARENT : ", parent);
    firebase
      .database()
      .ref("categories")
      .orderByChild("parent")
      .equalTo(parent)
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
        this.props.navigation.push("Category", {
          parent: parent,
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
