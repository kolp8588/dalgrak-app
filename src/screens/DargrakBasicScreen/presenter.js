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
  Picker,
} from "react-native";
import PropTypes from "prop-types";
import FitImage from "react-native-fit-image";
import { MaterialIcons } from "@expo/vector-icons";
import { COMMON_STYLES, FONTS } from "../../constants";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const DargrakBasicScreen = (props) => (
  <View style={COMMON_STYLES.CONTAINER}>
    {!props.category && (
      <View style={COMMON_STYLES.FLEX_START}>
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
        <Button title="선택하기" onPress={() => props.pickCategory()}></Button>
      </View>
    )}
    {props.category && (
      <View style={COMMON_STYLES.FLEX_START}>
        <ScrollView
          style={{
            alignSelf: "stretch",
          }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            {props.category.name}
          </Text>
          <Image
            source={{ uri: props.category.imageUrl }}
            style={{
              width: 200,
              height: 200,
              marginTop: 40,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            수량
          </Text>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 20,
              alignSelf: "stretch",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{
                height: 50,
                width: 150,
                borderColor: "lightgray",
                borderWidth: 1,
              }}
              onChangeText={(text) => onChangeText(text)}
              placeholder="입력"
            />
            <Picker
              style={{
                height: 50,
                width: 100,
                borderColor: "lightgray",
                borderWidth: 1,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="kg" value="kg" />
              <Picker.Item label="팩" value="ea" />
            </Picker>
          </View>
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
