import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";

import AddDalgrak from "../screens/AddDalgrakScreen";
const Stack = createStackNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="Tabs"
            component={TabsNavigation}
            options={{
              headerTitle: false,
            }}
          />
          <Stack.Screen
            name="AddDalgrak"
            component={AddDalgrak}
            options={{
              headerTitle: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigation;
