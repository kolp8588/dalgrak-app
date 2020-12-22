import React from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import CountDown from "react-native-countdown-component";
import Bidding from "../../components/Bidding"
import { COLORS, COMMON_STYLES, FONTS } from "../../constants";

const { height, width } = Dimensions.get("window");

const DargrakSellerScreen = (props) => {
  var dalgrak = props.feed[props.route.params.id];
  var date = new Date().getTime();
  var endDate = dalgrak.date;
  var sec = (endDate - date) / 1000;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text>Hello Router</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

DargrakSellerScreen.propTypes = {};

export default DargrakSellerScreen;
