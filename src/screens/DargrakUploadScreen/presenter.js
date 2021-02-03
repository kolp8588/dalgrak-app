
import React, { useEffect} from 'react';

import {
  SafeAreaView,
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

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';





const { height, width } = Dimensions.get("window");


const DargrakBasicScreen = (props) => {
  
  useEffect(()=>{  
    props.pickCategory();
  },[])
  return (


  <View style={COMMON_STYLES.CONTAINER}>
     <Modal
        animationType="fade"
        transparent={true}
        visible={props.isModalVisible}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Postcode
            jsOptions={{ animated: true }}
            onSelected={(data) => props.selectAddress(data)}
          />
          <TouchableOpacity style={{margin: 10 }} 
            onPress={() => {
                props.onChangeModalVisibility(false);
            }}>
            <View style={styles.button}>
              <Text style={styles.btnText}>취소</Text>
            </View>
            </TouchableOpacity>     
        </View>
      </View>
    </Modal>
    {props.category && (
      <View style={COMMON_STYLES.FLEX_START}>
        <KeyboardAwareScrollView
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
              placeholder="수량"
            />
            <DropDownPicker
              style={{ width: 100 }}
              items={[
                { label: "kg", value: "kg" },
                { label: "g", value: "g" },
              ]}
              defaultValue={props.unit}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => props.onUnitChange(item.value)}
            />
          </View>
          <View
            style={{
              marginTop: 4,
              marginHorizontal: 20,
              alignSelf: "stretch",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <AntDesign name="questioncircle" size={18} color={COLORS.DALGRAK} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: FONTS.SIZE.INFO,
              }}
            >
              Tip! 한 팩에는 보통 10개 정도의 사과가 들어있습니다.
            </Text>
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

          <View style={{  flexDirection: "row" }}>
            <TouchableOpacity
            onPressOut={() => props.onTimeSelect("12")} >
              <View style={[
                styles.button, 
                {
                backgroundColor:
                  props.date == 12
                    ? COLORS.DALGRAK  
                    : "white"
                 }]
            }>
                <Text style = {[styles.text, { color: props.date == 12 ? "white" : "black" }]}>
                  12H
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPressOut={() => props.onTimeSelect("24")} >
              <View style={[
                styles.button, 
                {
                backgroundColor:
                  props.date == 24
                    ? COLORS.DALGRAK  
                    : "white"
                 }]
            }>
                <Text style = {[styles.text, { color: props.date == 24 ? "white" : "black" }]}>
                  24H
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPressOut={() => props.onTimeSelect("36")} >
              <View style={[
                styles.button, 
                {
                backgroundColor:
                  props.date == 36
                    ? COLORS.DALGRAK  
                    : "white"
                 }]
            }>
                <Text style = {[styles.text, { color: props.date == 36 ? "white" : "black" }]}>
                  36H
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPressOut={() => props.onTimeSelect("48")} >
              <View style={[
                styles.button, 
                {
                backgroundColor:
                  props.date == 48
                    ? COLORS.DALGRAK  
                    : "white"
                 }]
            }>
                <Text style = {[styles.text, { color: props.date == 48 ? "white" : "black" }]}>
                  48H
                </Text>
              </View>
            </TouchableOpacity>
            

            
          </View>

          <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            배송 정보
          </Text>

          <View style={[styles.inputBox, {
        borderColor: props.addressErrorMsg != "" ? COLORS.WARNING : COLORS.MINOR,
        }]}>
        <View style={{flexDirection: "row"}}>
          <TextInput
              placeholder="주소"
              style={[styles.textInput, {width : width - 80, paddingLeft: 15}]}
              value={props.address}
              editable={false}
            />
          <TouchableOpacity style={{width: 40, justifyContent: "center", alignItems: "center"}} 
            onPress={() => {
                props.onChangeModalVisibility(true);
            }}>
              <MaterialCommunityIcons
                  name={"map-search-outline"}
                  size={30}
                  style={{ color: COLORS.DALGRAK }}
                />
          </TouchableOpacity>
        </View>
        {props.addressErrorMsg != "" && 
          (<Text style={styles.errorText}>{props.addressErrorMsg}</Text>)}
      </View>
      <View style={[styles.inputBox, {
              borderColor: props.detailAddressErrorMsg != "" ? COLORS.WARNING : COLORS.MINOR
          }]}>
          <TextInput
              placeholder="상세주소"
              style={styles.textInput}
              value={props.detailAddress}
              onChangeText={props.changeDetailAddress}
            />
          {props.detailAddressErrorMsg != "" && 
            (<Text style={styles.errorText}>{props.detailAddressErrorMsg}</Text>)}
        </View>

          <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            상세 요청 내용
        </Text>
       
        <TextInput
          style={styles.info}
          value={props.info}
          multiline={true}
          maxLength={200}
          onChangeText={(text) => props.onInfoChange(text)}
        />

            <View
                  style={ {marginBottom: 50}}
                ></View>
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

        
        </KeyboardAwareScrollView>
      </View>
    )}
  </View>
  )
};

DargrakBasicScreen.propTypes = {
  unit: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  button: {
    borderRadius: 3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth
  },

  btnText: {
    color: "black",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },

  centeredView: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  info: {
    marginHorizontal: 10,
    padding: 5,
    width: width-10,
    height: 100,
    backgroundColor: COLORS.INPUT,
    fontSize: FONTS.SIZE.CONTENTS,
  },

  textInput: {
    height: 50,
    width: width - 40,
    paddingHorizontal: 15,
    fontSize: FONTS.SIZE.CONTENTS,
  },

  inputBox: {
    marginBottom: 15,
    borderWidth: StyleSheet.hairlineWidth,
  }
});

export default DargrakBasicScreen;
