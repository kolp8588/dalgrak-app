import React, { Component } from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import DalgrakScreen from "../screens/DalgrakScreen";
import DalgrakSellerScreen from "../screens/DalgrakSellerScreen";
import FeedScreen from "../screens/FeedScreen";
import {LinearGradient} from 'expo-linear-gradient';

import { COLORS } from "../constants";

const Stack = createStackNavigator();
class HomeRoute extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Stack.Navigator
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
          name="feed"
          component={FeedScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            headerLeft: () => <View />,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <TouchableWithoutFeedback
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate("Events")}
              >
                <MaterialCommunityIcons
                  name={"bell"}
                  size={22}
                  style={{ marginRight: 15, color: "white" }}
                />
              </TouchableWithoutFeedback>
            ),
          }}
        />
        <Stack.Screen
          name="dalgrak"
          component={DalgrakScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            title: "Dalgrak",
          }}
        />
        <Stack.Screen
          name="dalgrakSeller"
          component={DalgrakSellerScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            title: "DalgrakSeller",
          }}
        />
      </Stack.Navigator>
    );
  }
}

function LogoTitle() {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 40, height:40, resizeMode: "contain" }}
        source={require("../../assets/images/dalgrak_white.png")}
      />
    </View>
  );
}

export default HomeRoute;
