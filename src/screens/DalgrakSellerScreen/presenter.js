import React from "react";
import { TextInputMask } from "react-native-masked-text";

import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import CountDown from "react-native-countdown-component";
import Bidding from "../../components/Bidding"
import { COLORS, COMMON_STYLES, FONTS } from "../../constants";

const { height, width } = Dimensions.get("window");

const DargrakSellerScreen = (props) => {
  var bidding = props.route.params.bidding;
  var dalgrak = props.route.params.dalgrak;
  //var date = new Date().getTime();
  //var endDate = dalgrak.date;
  //var sec = (endDate - date) / 1000;

  

  return (
    <View style={COMMON_STYLES.CONTAINER}>
      <ScrollView
          style={{
            flex: 1,
            alignSelf: "stretch",
          }}
          contentContainerStyle={{ alignItems: "center" }}
        >
        <Modal
          animationType="fade"
          transparent={true}
          visible={props.isModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalRow}>
                <Text style={styles.modalBiddingTitleText}>입찰단가: </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      delimiter: ",",
                      separator: " ",
                      unit: "",
                      suffixUnit: "원",
                    }}
                    style={[styles.modalBiddingText, { textAlignVertical: "top" }]}
                    editable={false}
                    value={bidding.price}
                  />
                  <Text style={styles.modalBiddingTitleText}> / {dalgrak.unit} </Text>
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalBiddingTitleText}>총 입찰금액: </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      delimiter: ",",
                      separator: " ",
                      unit: "",
                      suffixUnit: "원",
                    }}
                    style={[styles.modalBiddingText, { textAlignVertical: "top" }]}
                    editable={false}
                    value={bidding.total}
                  />
              </View>

                <Text
                    style={{
                      color: COLORS.DALGRAK,
                      fontSize: FONTS.SIZE.H1,
                      fontWeight: "bold",
                      marginTop: 10,
                      alignSelf: "center",
                    }}
                  >
                  "{bidding.seller.userInfo.username}" 의 낙찰 가격은 
                </Text>
                <View style={{alignSelf:"center", flexDirection: "row"}} >
                  <TextInputMask
                      type={"money"}
                      options={{
                        precision: 0,
                        delimiter: ",",
                        separator: " ",
                        unit: "",
                        suffixUnit: "원",
                      }}
                      style={{
                        color: COLORS.DALGRAK,
                        fontSize: FONTS.SIZE.H1,
                        fontWeight: "bold",
                        alignSelf: "center",
                      }}
                      editable={false}
                      value={bidding.total}
                    />
                    <Text
                      style={{
                        color: COLORS.DALGRAK,
                        fontSize: FONTS.SIZE.H1,
                        fontWeight: "bold",
                        alignSelf: "center",
                        marginLeft: 3,
                      }}
                    >
                      입니다.
                    </Text>
                </View>

                <Text
                    style={{
                      color: COLORS.DALGRAK,
                      fontSize: FONTS.SIZE.H1,
                      fontWeight: "bold",
                      marginTop: 10,
                      marginBottom: 30,
                      alignSelf: "center",
                    }}
                  >
                  계속 진행 하시겠습니까?
                </Text>
                <View
                  style={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                
                  <TouchableHighlight
                        style={{ flex: 1, height: 50, justifyContent: "center" }}
                        onPress={() => {
                          props.onPressSubmit(false);
                        }}
                      >
                        <Text style={styles.modalButtonText}>취소</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={{ flex: 1, height: 50, justifyContent: "center" }}
                      onPress={() => {
                        props.submit();
                      }}
                    >
                      {props.isSubmitting ? (
                        <ActivityIndicator size="large" color={COLORS.DALGRAK} />
                      ) : (
                        <Text style={styles.modalButtonText}>확인</Text>
                    )}
                  </TouchableHighlight>
                </View>
            </View>
          </View>
        </Modal>


      <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 20,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
          {dalgrak.category} 입찰
     </Text>   
   
     <View style={{
              alignSelf: "stretch",
              flex: 1,
              marginTop: 20,
              marginLeft: 10,
              flexDirection: "row",
            }}>
          <TouchableOpacity >
            <Image
              source={require("../../../assets/images/noPhoto.jpg")}
              style={styles.avatar}
              defaultSource={require("../../../assets/images/noPhoto.jpg")}
            />
          </TouchableOpacity>
            <Text
            style={{
              alignSelf: "flex-start",
              marginLeft: 10,
              marginTop: 10,
            }}>
              {bidding.seller.userInfo.username}
           </Text>
           <Text
            style={{
              alignSelf: "flex-start",
              marginLeft: 200,
              color:"red",
              marginTop: 10,
            }}>
              25.6
           </Text>
          
           
        
        </View>
     
     <View style={{flexDirection: 'row', alignItems: 'center' , marginTop:15}}>
     <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
     </View>
     <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 40,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            입찰 정보
     </Text>  
     <Text
        style={{
          alignSelf: "flex-start",
          marginTop: 10,
          marginLeft: 30,
        }}>
          입찰 단가
     </Text>
     <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 10,
              marginLeft: 40,
              color:COLORS.DALGRAK,
              fontSize: 15,
            }}
          >
          {bidding.price} / {dalgrak.unit}
     </Text>  
     <Text
        style={{
          alignSelf: "flex-start",
          marginTop: 10,
          marginLeft: 30,
        }}>
          입찰 단가
     </Text>
     <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 10,
              marginLeft: 40,
              color:COLORS.DALGRAK,
              fontSize: 15,
            }}
          >
          {bidding.total} / {dalgrak.quantity} {dalgrak.unit}
     </Text>  
     <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            상품 소개
     </Text>  
     <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 30,
        }}>
          {bidding.info}
     </Text>
     <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            입찰자 한 마디!
     </Text>  
     <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 30,
        }}>
          {bidding.comment}
     </Text>
     <Text
            style={{
              alignSelf: "flex-start",
              marginTop: 50,
              marginLeft: 20,
              fontSize: FONTS.SIZE.TITLE,
            }}
          >
            상품 사진
     </Text>  

     <View
                  style={ {marginBottom: 80}}
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
              backgroundColor:COLORS.DALGRAK
            }}
          
           onPress={() => {
            props.onPressSubmit(true); 
        }}
          >
            <Text
              style={{
                marginVertical: 10,
                fontSize: FONTS.SIZE.CONTENTS,
                color: "white",
              }}
            >
              낙찰 하기
            </Text>
          </TouchableOpacity>
        </View>
     
     </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centeredView: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: width * 0.9,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalRow: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  modalTitleText: {
    marginBottom: 15,
    fontSize: FONTS.SIZE.CONTENTS,
    color: "gray",
  },
  modalContentsText: {
    marginBottom: 15,
    width: width * 0.5,
    fontSize: FONTS.SIZE.CONTENTS,
  },
  modalBiddingTitleText: {
    marginBottom: 15,
    fontSize: FONTS.SIZE.CONTENTS,
    color: COLORS.DALGRAK,
    fontWeight: "bold",
  },
  modalBiddingText: {
    marginBottom: 15,
    //width: width * 0.5,
    fontSize: FONTS.SIZE.CONTENTS,
    fontWeight: "bold",
  },
  modalButtonText: {
    color: COLORS.LIGHT_BLACK,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: FONTS.SIZE.H1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  headerColumn: {
    width: width / 2,
  },
});



DargrakSellerScreen.propTypes = {};

export default DargrakSellerScreen;
