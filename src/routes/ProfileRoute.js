import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {LinearGradient} from 'expo-linear-gradient';

import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import DeliveryManageScreen from "../screens/DeliveryManageScreen";
import FAQScreen from "../screens/FAQScreen";

import { Component } from "react";
import { COLORS } from "../constants";
import EventsRoute from "./EventsRoute";
import { TouchableOpacity } from "react-native-gesture-handler";
const Stack = createStackNavigator();

class ProfileRoute extends Component {
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
              />
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: "나의 달그락",
            headerTintColor: "white",     
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{
            headerTitle: "프로필 편집",
            headerTintColor: "white",     
            // headerRight: () => (
            //   <TouchableOpacity
            //     style={{ marginRight: 20 }}
            //     // onPress={() => navigation.navigate("Events")}
            //   >
            //     <Text style={{
            //       color:"white",
            //     }}>저장</Text>
            //   </TouchableOpacity>
            // ),
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerTitle: "공지사항",
            headerTintColor: "white",     
          }}
        />
         <Stack.Screen
          name="FAQ"
          component={FAQScreen}
          options={{
            headerTitle: "고객센터",
            headerTintColor: "white",     
          }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryManageScreen}
          options={{
            headerTitle: "배송관리",
            headerTintColor: "white",     
          }}
        />
        <Stack.Screen
          name="Events"
          component={EventsRoute}
          options={{
            headerTitle: "이벤트",
            headerTintColor: "white",     
          }}
        />
      
        
      </Stack.Navigator>
    );
  }
}

export default ProfileRoute;
