import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {LinearGradient} from 'expo-linear-gradient';

import TabsNavigation from "./TabsNavigation";
import CategoryScreen from "../screens/CategoryScreen";
import DargrakUploadScreen from "../screens/DargrakUploadScreen";
import EventsRoute from "../routes/EventsRoute";
import { COLORS } from "../constants";

const Stack = createStackNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="modal"
          screenOptions={{
            headerBackground: () =>
                <LinearGradient
                  colors={[COLORS.DALGRAK, COLORS.DALGRAK_MEDIUM, COLORS.DALGRAK_DARK]}
                  style={{ flex: 1 }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                />,
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={TabsNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UploadDalgrak"
            component={DargrakUploadScreen}
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
