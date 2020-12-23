import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FadeIn from "react-native-fade-in-image";
import { COLORS, FONTS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import CountDown from "react-native-countdown-component";

const { width, height } = Dimensions.get("window");

class Bidding extends Component {
  render() {
    const { navigation, bidding, dalgrak } = this.props;
    return (
      <View style={styles.bidding}>
        <TouchableOpacity
           onPress={() => navigation.navigate("dalgrakSeller", { bidding: bidding, dalgrak: dalgrak })}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FadeIn>
              <Image
                source={require("../../../assets/images/noPhoto.jpg")}
                style={styles.avatar}
                defaultSource={require("../../../assets/images/noPhoto.jpg")}
              />
            </FadeIn>
            <View
              style={{
                marginLeft: 20,
                marginVertical: 2,
              }}
            >              
              <Text
                style={{
                  marginTop: 3,
                  fontSize: FONTS.SIZE.CONTENTS,
                }}
              >
                업체명 : {bidding.seller.userInfo.username}
              </Text>
              <Text
                style={{
                  fontSize: FONTS.SIZE.CONTENTS,
                }}
              >
                단위 가격 : {bidding.price}
              </Text>
              <Text
                style={{
                  fontSize: FONTS.SIZE.CONTENTS,
                }}
              >
                총 입찰가 : {bidding.total}
              </Text>
            </View>
          </View>            
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bidding: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default function (props) {
  const navigation = useNavigation();

  return <Bidding {...props} navigation={navigation} />;
}
