import React from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import PropTypes from "prop-types";
import { COLORS, COMMON_STYLES, FONTS } from "../../constants";
import { TextInput } from "react-native-gesture-handler";
import CalendarPicker from "react-native-calendar-picker";
import DropDownPicker from "react-native-dropdown-picker";
import FadeIn from "react-native-fade-in-image";

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
            flex: 1,
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
          <FadeIn>
            <Image
              source={{ uri: props.category.imageUrl }}
              style={{
                width: 200,
                height: 200,
                marginTop: 40,
                borderRadius: 100,
              }}
            />
          </FadeIn>
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
              keyboardType="numeric"
              onChangeText={(text) => props.onQuantityChange(text)}
              placeholder="입력"
            />
            <DropDownPicker
              style={{ width: 100 }}
              items={[
                { label: "kg", value: "kg" },
                { label: "팩", value: "ea" },
              ]}
              defaultValue={props.unit}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => props.onUnitChange(item.value)}
            />
          </View>

          <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginBottom: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            마감일
          </Text>

          <View style={{ marginBottom: 50 }}>
            <CalendarPicker
              // maxDate={maxDate}
              weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
              months={[
                "January",
                "Febraury",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ]}
              previousTitle="<"
              nextTitle=">"
              selectedDayColor={COLORS.DALGRAK}
              selectedDayTextColor="white"
              scaleFactor={375}
              onDateChange={props.onDateChange}
              onDateChange={(date) => props.onDateChange(date.toString())}
            />
          </View>
        </ScrollView>
        <View
          style={{
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
            disabled={
              !(
                (props.unit != "") &
                (props.quantity != "") &
                (props.date != "")
              )
            }
            onPressOut={props.submit}
          >
            <Text
              style={{
                marginVertical: 10,
                fontSize: FONTS.SIZE.CONTENTS,
                color: "white",
              }}
            >
              등록
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
  </View>
);

DargrakBasicScreen.propTypes = {
  unit: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default DargrakBasicScreen;
