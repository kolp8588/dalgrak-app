
import React, { useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Modal,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { COLORS, COMMON_STYLES, FONTS } from "../../constants";
import { TextInput } from "react-native-gesture-handler";
import CalendarPicker from "react-native-calendar-picker";
import DropDownPicker from "react-native-dropdown-picker";
import FadeIn from "react-native-fade-in-image";
import Postcode from 'react-native-daum-postcode';
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";





const { height, width } = Dimensions.get("window");


const DeliveryManageScreen = (props) => {
  return (
  <View>
    <Text>
    DeliveryManageScreen
    </Text>
  </View>
  )
};

DeliveryManageScreen.propTypes = {
};


export default DeliveryManageScreen;
