import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileNumber from "../ProfileNumber";

//import Like from "../Like";
import { COLORS, FONTS } from "../../constants"

const width = Dimensions.get("window").width;
class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            tintColor={"black"}
            titleColor={"black"}
            refreshing={this.props.isFetching}
            onRefresh={this.props.refresh}
          />
        }>
        <View style={styles.header}>
          <TouchableOpacity 
            onPressOut={() => this.props.navigation.navigate("ProfileEdit", {
              profile: this.props.profileObject
            })}
          >
            <ImageBackground
              source={require("../../../assets/images/noPhoto.jpg")}
              style={styles.avatar}
              imageStyle={{borderRadius: 50}}
              defaultSource={require("../../../assets/images/noPhoto.jpg")}
            />
          </TouchableOpacity>
          <Text style={{fontSize: FONTS.SIZE.H1, fontWeight: "bold", marginBottom: 10}}>
            {this.props.profileObject.username}
          </Text>
          <View style={styles.headerColumn}>
            <View style={styles.profileNumbers}>
            <ProfileNumber
                number={"12"}
                text={"달그락"}
              />
              <ProfileNumber
                number={"25%"}
                text={"입찰율"}
              />
              <ProfileNumber
                number={"33%"}
                text={"낙찰율"}
              />
            </View>
          </View>
        </View>
        

        <View style={{flexDirection: 'row', alignItems: 'center' , marginTop:15}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
        </View>

        <View style={{ flex: 2, backgroundColor: "white" }}>
          <TouchableOpacity
            onPressOut={() => this.props.navigation.navigate("Notification")}
            >
            <View>
              <Text>
                공지사항
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center' , marginTop:15}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
        </View>

        <View style={{ flex: 2, backgroundColor: "white" }}>
          <TouchableOpacity
            onPressOut={() => this.props.navigation.navigate("FAQScreen")}
            >
            <View>
              <Text>
                고객센터
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center' , marginTop:15}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
        </View>

        <View style={{ flex: 2, backgroundColor: "white" }}>
          <TouchableOpacity
            onPressOut={() => this.props.navigation.navigate("Delivery")}
            >
            <View>
              <Text>
                배송관리
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center' , marginTop:15}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
        </View>

        <View style={{ flex: 2, backgroundColor: "white" }}>
          <TouchableOpacity
            onPressOut={() => this.props.navigation.navigate("Notification")}
            >
            <View>
              <Text>
                이벤트
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}
Profile.propTypes = {};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flex: 1,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "flex-end"
  },
  headerColumn: {
    justifyContent: "center",
    width: width * 0.5,
  },
  profileNumbers: {
    flexDirection: "row",
    marginBottom: 7,
    justifyContent: "space-between",
  },
  headerText: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  name: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 13,
  },
  bio: {
    marginBottom: 5,
  },
  website: {
    color: "#003569",
  },
  modeBar: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
  },
  modeIcon: {
    width: width / 2,
    alignItems: "center",
  },
  button: {
    borderRadius: 3,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default function (props) {
  const navigation = useNavigation();
  return <Profile {...props} navigation={navigation} />;
}

