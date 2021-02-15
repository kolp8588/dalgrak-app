import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";


const Stack = createStackNavigator();

function LoggedOutNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
              headerLeft: () => <View />,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNavigation;
