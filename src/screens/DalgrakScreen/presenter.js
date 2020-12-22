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


const DargrakScreen = (props) => {
  var dalgrak = props.feed[props.route.params.id];
  var date = new Date().getTime();
  var endDate = dalgrak.date;
  var sec = (endDate - date) / 1000;

const { navigation } = props;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 15,
        }}
      >
        <ScrollView
          style={{
            flex: 9,
          }}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={props.isFetching}
          //     onRefresh={props.refresh}
          //     tintColor={"black"}
          //   />
          // }
        >
          <View
            style={{
              marginLeft: 20,
              alignItems: "flex-start",
            }}
          >
            <CountDown
              style={{
                marginVertical: 20,
              }}
              until={sec}
              size={15}
              digitStyle={{ backgroundColor: COLORS.DALGRAK }}
              digitTxtStyle={{ color: "white" }}
              timeToShow={['H', 'M', 'S']}
              showSeparator={true}
              
              timeLabels={{h: null, m: null, s: null}}
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
                style={{ width: 100, height: 100, borderRadius: 100 }}
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
          <TouchableOpacity
          onPress={() => navigation.navigate("dalgrakSeller")}
        >
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
              참여업체 : 총 {dalgrak.biddings ? dalgrak.biddings.length : 0} 개
            </Text>
            {dalgrak.biddings &&
                dalgrak.biddings.map((bidding, index) => {
                  bidding.idx = index;
                  return <Bidding bidding={bidding} key={bidding.id} />;
                })}
          </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.DALGRAK,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              fontSize: FONTS.SIZE.CONTENTS,
              color: "white",
            }}
          >
            입찰 종료
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

DargrakScreen.propTypes = {};

export default DargrakScreen;
