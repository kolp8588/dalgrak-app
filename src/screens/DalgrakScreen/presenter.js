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

import { COLORS, COMMON_STYLES, FONTS } from "../../constants";

const { height, width } = Dimensions.get("window");

const DargrakScreen = (props) => {
  var dalgrak = props.feed[props.route.params.id];
  var date = new Date().getTime();
  var endDate = new Date(dalgrak.date).getTime();
  var sec = (endDate - date) / 1000;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 10,
          backgroundColor: "white",
        }}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={props.isFetching}
        //     onRefresh={props.refresh}
        //     tintColor={"black"}
        //   />
        // }
      >
        <View style={styles.container}>
          <CountDown
            style={{
              marginVertical: 20,
            }}
            until={sec}
            size={15}
            digitStyle={{ backgroundColor: COLORS.DALGRAK }}
            digitTxtStyle={{ color: "white" }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <FadeIn>
            <Image
              source={{ uri: dalgrak.imageUrl }}
              style={{ width: 100, height: 100 }}
            />
          </FadeIn>
          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: FONTS.SIZE.TITLE,
              }}
            >
              {dalgrak.category}
            </Text>
            <Text
              style={{
                fontSize: FONTS.SIZE.CONTENTS,
              }}
            >
              {dalgrak.quantity} {dalgrak.unit}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            참여 업체
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "stretch",
            alignItems: "center",
            backgroundColor:
              (props.unit != "") & (props.quantity != "") & (props.date != "")
                ? COLORS.DALGRAK
                : "gray",
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              fontSize: FONTS.SIZE.CONTENTS,
              color: "white",
            }}
          >
            입찰 조기마감
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View style={COMMON_STYLES.FLEX_START}>
    //   <View
    //     style={{
    //       alignSelf: "stretch",
    //       justifyContent: "flex-start",
    //       backgroundColor: "red",
    //     }}
    //   >
    //     <CountDown
    //       until={sec}
    //       size={15}
    //       digitStyle={{ backgroundColor: COLORS.DALGRAK }}
    //       digitTxtStyle={{ color: "white" }}
    //     />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

DargrakScreen.propTypes = {};

export default DargrakScreen;
