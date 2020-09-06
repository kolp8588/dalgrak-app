import React, { Component } from "react";
import * as firebase from "firebase";

import DargrakBasicScreen from "./presenter";

class Container extends Component {
  state = {
    isSelected: false,
    isValid: false,
    unit: "kg",
    quantity: "",
    date: "",
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
        onUnitChange={this._onUnitChange}
        onQuantityChange={this._onQuantityChange}
        onDateChange={this._onDateChange}
        submit={this._submit}
      />
    );
  }

  _onUnitChange = (text) => {
    this.setState({
      unit: text,
    });
  };

  _onDateChange = (date) => {
    this.setState({
      date: date,
    });
  };

  _onQuantityChange = (text) => {
    this.setState({
      quantity: text,
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

  _submit = async () => {
    const { category, date, quantity, unit } = this.state;
    const { submit } = this.props;
    const parent = {
      category,
      date,
      quantity,
      unit,
    };
    const uploadResult = await submit(parent);
    console.log(uploadResult);
    if (uploadResult) {
      this.props.navigation.goBack();
    }
  };
}

export default Container;
