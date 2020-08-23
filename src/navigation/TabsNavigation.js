import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../constants";
import HomeRoute from "../routes/HomeRoute";
import EventsRoute from "../routes/EventsRoute";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        const iconName = {
          Home: "home",
          Dalgrak: "alpha-d-box",
          Events: "bell",
        };
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === "Dalgrak") {
              navigation.navigate("UploadDalgrak");
            } else {
              navigation.setOptions({
                title: label,
              });
              navigation.navigate(label, { name: label });
            }
          }
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <MaterialCommunityIcons
              name={iconName[label]}
              size={25}
              color={isFocused ? COLORS.DALGRAK : "gray"}
            />
            <Text style={{ color: isFocused ? COLORS.DALGRAK : "gray" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabsNavigation({ navigation, route }) {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeRoute} />
      <Tab.Screen name="Dalgrak" component={View} />
      <Tab.Screen name="Events" component={EventsRoute} />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
