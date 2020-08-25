import React, { Component } from "react";
import * as firebase from "firebase";

import DargrakBasicScreen from "./presenter";

class Container extends Component {
  state = {
    isSelected: false,
  };
  componentWillUnmount() {
    this.props.refreshStates();
  }

  render() {
    return (
      <DargrakBasicScreen
        {...this.state}
        {...this.props}
        pickCategory={this._pickCategory}
      />
    );
  }

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
}

export default Container;
