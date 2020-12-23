import React, { Component } from "react";
import DargrakSellerScreen from "./presenter";

class Container extends Component {
  state = {
   
    isModalVisible: false,
   
  };
  
  render() {
    return <DargrakSellerScreen 
    {...this.state} 
    {...this.props} 
    onPressSubmit={this._onPressSubmit}
    submit = {this._submit}
    />;
    
  }

  _onPressSubmit = (bool) => {
    this.setState({
      isModalVisible: bool,
    });
  };

  _submit = async () => {

    var bidding = this.props.route.params.bidding;
    var dalgrak = this.props.route.params.dalgrak;

    const {submit} = this.props

    const uploadResult = await submit(dalgrak, bidding.id);
    if (uploadResult) {
      this.setState({
        isModalVisible: false,
      });
      
      this.props.navigation.goBack();
      this.props.navigation.goBack();


    }
  };
}

export default Container;
