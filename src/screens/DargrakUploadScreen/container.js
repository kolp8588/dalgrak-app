import React, { Component } from "react";

import DargrakBasicScreen from "./presenter";

class Container extends Component {
  state = {
    isSelected: false,
    isValid: false,
    unit: "kg",
    quantity: "",
    date: "",
    isModalVisible: false,
    detailAddress: "",
    detailAddressErrorMsg: "",
    address: "",
    info: "",
    time: "",
    addressErrorMsg: "",
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
        onChangeModalVisibility={this._onChangeModalVisibility}
        onDateChange={this._onDateChange}
        submit={this._submit}
        selectAddress={this._selectAddress}
        changeDetailAddress={this._changeDetailAddress}
        onInfoChange={this._onInfoChange}
        onTimeSelect={this._onTimeSelect}
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

  _selectAddress = (result) => {
    this.setState({
      address: result.address,
      isModalVisible: false,
    });
  };
  _changeDetailAddress = (text) => {
    this.setState({ detailAddress: text });
  };
  _onChangeModalVisibility = (bool) => {
    this.setState({
      isModalVisible: bool,
    });
  };

  _onInfoChange = (text) => {
    this.setState({
      info: text,
    });
  };

  _onTimeSelect = (text) => {
    
    this.setState({
      date: text,
    });
  };

 

  _submit = async () => {
    const { category, date, quantity, unit ,detailAddress, address, info } = this.state;
    const { submit } = this.props;
    const param = {
      category,
      date,
      quantity,
      unit,
      detailAddress,
      address,
      info,

    };
    const uploadResult = await submit(param);
    if (uploadResult) {
      this.props.navigation.goBack();
    }
  };
}

export default Container;
