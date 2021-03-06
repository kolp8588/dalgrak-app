import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import {COLORS, FONTS} from "../../constants"

const ProfileNumber = ({ onPress, number = 0, text }) => (
  <TouchableOpacity onPressOut={onPress}>
    <View style={styles.item}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ProfileNumber.propTypes = {
  onPress: PropTypes.func,
  number: PropTypes.string,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
  },
  number: {
    fontSize: FONTS.SIZE.H1,
    color: COLORS.DALGRAK,
    fontWeight: "bold",
  },
  text: {
    fontSize: FONTS.SIZE.CONTENTS,
  }
});

export default ProfileNumber;
