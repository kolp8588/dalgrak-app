import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";
import CategoryScreen from "../screens/CategoryScreen";
import DargrakBasicScreen from "../screens/DargrakBasicScreen";

const Stack = createStackNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="Tabs"
            component={TabsNavigation}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="UploadDalgrak"
            component={DargrakBasicScreen}
            options={{
              title: "달그락 올리기",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              headerTitle: false,
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigation;
