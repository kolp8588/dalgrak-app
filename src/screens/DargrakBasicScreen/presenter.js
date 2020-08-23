import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Button,
} from "react-native";
import PropTypes from "prop-types";
import FitImage from "react-native-fit-image";
import { MaterialIcons } from "@expo/vector-icons";
import { COMMON_STYLES, FONTS } from "../../constants";

const { height, width } = Dimensions.get("window");

const DargrakBasicScreen = (props) => (
  <View style={COMMON_STYLES.CONTAINER}>
    <StatusBar hidden={true} />
    {!props.isSelected && (
      <View style={[COMMON_STYLES.FLEX_START, { marginHorizontal: 20 }]}>
        <Text
          style={{
            marginTop: 50,
            fontSize: FONTS.SIZE.TITLE,
          }}
        >
          아이템 고르기
        </Text>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 50,
            fontSize: FONTS.SIZE.CONTENTS,
          }}
        >
          입찰을 원하는 상품을 선택해주세요
        </Text>
        <Image
          source={require("../../../assets/images/farmer.png")}
          style={{
            width: 200,
            height: 200,
            marginBottom: 40,
          }}
        />
        <Button
          title="선택하기"
          onPress={() => props.pickCategory(props.depth)}
        ></Button>
      </View>
    )}
    {props.photos && (
      <View style={styles.pictureContainer}>
        <FitImage source={{ uri: props.pickedPhoto.node.image.uri }} />
        <TouchableOpacity onPress={props.approvePhoto}>
          <View style={styles.action}>
            <MaterialIcons name="check-circle" color="white" size={40} />
          </View>
        </TouchableOpacity>
      </View>
    )}
    {props.photos && (
      <View style={styles.photos}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {props.photos.map((photo, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => props.pickPhoto(photo)}
            >
              <Image
                source={{ uri: photo.node.image.uri }}
                style={styles.smallPhoto}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )}
  </View>
);

DargrakBasicScreen.propTypes = {
  pickedPhoto: PropTypes.object,
  photos: PropTypes.array,
  approvePhoto: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pictureContainer: {
    flex: 2,
  },
  photos: {
    flex: 1,
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  smallPhoto: {
    width: width / 3,
    height: width / 3,
  },
  action: {
    backgroundColor: "transparent",
    height: 40,
    width: 40,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default DargrakBasicScreen;
