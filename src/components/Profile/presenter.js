import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const width = Dimensions.get("window").width;
class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Hello Profile!</Text>
      </View>
    );
  }
}
Profile.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  profileObject: PropTypes.shape({
    bio: PropTypes.string,
    followers_count: PropTypes.number,
    following_count: PropTypes.number,
    following: PropTypes.bool,
    is_self: PropTypes.bool,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        creator: PropTypes.shape({
          profile_image: PropTypes.string,
          username: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        like_count: PropTypes.number.isRequired,
        caption: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
              profile_image: PropTypes.string,
              username: PropTypes.string.isRequired,
            }).isRequired,
          })
        ).isRequired,
        natural_time: PropTypes.string.isRequired,
        is_liked: PropTypes.bool.isRequired,
        is_vertical: PropTypes.bool.isRequired,
      })
    ),
    name: PropTypes.string,
    post_count: PropTypes.number,
    profile_image: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
  }),
  changeToList: PropTypes.func.isRequired,
  changeToGrid: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["grid", "list"]).isRequired,
  showAS: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerColumn: {
    width: width / 2,
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

export default Profile;
