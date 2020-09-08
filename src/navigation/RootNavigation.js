import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";
import CategoryScreen from "../screens/CategoryScreen";
import DargrakBasicScreen from "../screens/DargrakBasicScreen";
import EventsRoute from "../routes/EventsRoute";

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
              headerShown: false,
            }}
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
          <Stack.Screen name="Events" component={EventsRoute} options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigation;
