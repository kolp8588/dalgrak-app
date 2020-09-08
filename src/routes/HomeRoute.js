import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../screens/FeedScreen";
const Stack = createStackNavigator();
class HomeRoute extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{
            title: "Feed",
            headerRight: () => (
              <TouchableWithoutFeedback
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate("Events")}
              >
                <MaterialCommunityIcons
                  name={"bell"}
                  size={20}
                  style={{ marginRight: 15 }}
                />
              </TouchableWithoutFeedback>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default HomeRoute;
