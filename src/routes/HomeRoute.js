import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../screens/FeedScreen";
const Stack = createStackNavigator();
class HomeRoute extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="feed" component={FeedScreen} />
      </Stack.Navigator>
    );
  }
}

export default HomeRoute;
