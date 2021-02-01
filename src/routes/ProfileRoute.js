import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/EventScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import DeliveryManageScreen from "../screens/DeliveryManageScreen";
import FAQScreen from "../screens/FAQScreen";




import { Component } from "react";
import { COLORS } from "../constants";
const Stack = createStackNavigator();

class ProfileRoute extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            headerTintColor: "white",
          }}
        />
         <Stack.Screen
          name="FAQ"
          component={FAQScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryManageScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.DALGRAK,
            },
            headerTintColor: "white",
          }}
        />
      
        
      </Stack.Navigator>
    );
  }
}

export default ProfileRoute;
