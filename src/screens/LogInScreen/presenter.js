import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get("window");

const LogInScreen = (props) => (
  <View style={styles.container}>
    <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'transparent'} />
    <View style={styles.header}>
      <Image
        source={require("../../../assets/images/dalgrak_full.png")}
        resizeMode="stretch"
        style={styles.logo}
      />
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={props.username}
        onChangeText={props.changeUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        autoCapitalize={"none"}
        secureTextEntry={true}
        value={props.password}
        onChangeText={props.changePassword}
        returnKeyType={"send"}
        onSubmitEditing={props.submit}
      />
     <TouchableOpacity style={styles.touchable} onPressOut={props.submit}>
        <View style={styles.loginButton}>
          {props.isSubmitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={[styles.btnText, {color: "white"}]}>로그인</Text>
          )}
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => props.navigation.navigate("SignUp")}
      >
        <View style={styles.signUpButton}>
          <Text style={[styles.btnText, {color: COLORS.LIGHT_BLACK}]}>회원가입</Text>
        </View>
      </TouchableOpacity>
            
      
      <TouchableOpacity style={styles.fbContainer} onPressOut={props.fbLogin}>
        <View style={styles.fbView}>
          <MaterialCommunityIcons
            name="facebook-box"
            size={22}
            color="#3E99EE"
          />
          <Text style={styles.fbText}>Log in with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
          <MaterialCommunityIcons
            name="alpha-k-box"
            size={22}
            color="#ffe812"
          />
          <Text style={styles.fbText}>Log in with Kakao Talk</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

LogInScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  fbLogin: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  header: {
    alignItems: "center",
  },
  logo: {
    height: 150,
    resizeMode: "contain",
  },
  content: {
    backgroundColor: "white",
    paddingTop: 50,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width - 80,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    fontSize: 14,
  },
  touchable: {
    borderRadius: 5,
    backgroundColor: "#3E99EE",
    width: width - 80,
  },
  loginButton: {
    borderRadius: 5,
    backgroundColor: COLORS.DALGRAK,
    height: 50,
    justifyContent: "center",
  },
  signUpButton: {
    borderRadius: 5,
    backgroundColor: "white",
    height: 50,
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },
});

export default LogInScreen;
