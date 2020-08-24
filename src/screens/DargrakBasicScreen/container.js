import React, { Component } from "react";
import * as firebase from "firebase";

import DargrakBasicScreen from "./presenter";

class Container extends Component {
  state = {
    isSelected: false,
  };
  componentDidMount() {}
  componentWillUnmount() {
    this.props.refreshStates();
  }

  render() {
    return (
      <DargrakBasicScreen
        {...this.state}
        {...this.props}
        pickCategory={this._pickCategory}
        getCategoryImage={this._getCategoryImage}
      />
    );
  }
  _getCategoryImage = async (item) => {
    console.log("Hey!");
    const url = await firebase
      .storage()
      .ref("images/categories/apple.jpg")
      .getDownloadURL();
    console.log(url);
    return url;
  };

  _pickCategory = async () => {
    const parent = {
      depth: -1,
      name: "root",
    };
    const { getCategories } = this.props;
    const result = await getCategories(parent);

    if (result !== null) {
      const {
        navigation: { navigate },
      } = this.props;

      this.props.navigation.navigate("Category", {
        categories: result,
      });
    }
  };

  // _approveItem = () => {
  //   const {
  //     navigation: { navigate },
  //   } = this.props;
  //   const { pickedItem } = this.state;
  //   navigate("UploadPhoto", { item: pickedItem });
  // };
}

export default Container;
