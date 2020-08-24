import React, { Component } from "react";
import * as firebase from "firebase";

import DargrakBasicScreen from "./presenter";

class Container extends Component {
  state = {
    isSelected: false,
  };
  componentDidMount() {
    this.props.refreshStates();
    console.log("Hello Mount", this.props.category);
  }

  render() {
    return (
      <DargrakBasicScreen
        {...this.state}
        pickPhoto={this._pickPhoto}
        pickCategory={this._pickCategory}
      />
    );
  }
  _pickItem = (item) => {
    this.setState({
      pickedItem: item,
    });
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

  _approveItem = () => {
    const {
      navigation: { navigate },
    } = this.props;
    const { pickedItem } = this.state;
    navigate("UploadPhoto", { item: pickedItem });
  };
}

export default Container;
