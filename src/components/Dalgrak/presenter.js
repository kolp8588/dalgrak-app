import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

class Dalgrak extends Component {
  render() {
    //const { navigation } = this.props;
    return (
      // <View style={styles.photo}>
      //   <TouchableOpacity
      //     onPressOut={() =>
      //       navigation.navigate("ProfileDetail", {
      //         user: props.creator,
      //       })
      //     }
      //   >
      //     <View style={styles.header}>
      //       <FadeIn>
      //         <Image
      //           source={
      //             props.creator.profile_image
      //               ? {
      //                   uri: props.creator.profile_image,
      //                 }
      //               : require("../../../assets/images/noPhoto.jpg")
      //           }
      //           style={styles.avatar}
      //         />
      //       </FadeIn>
      //       <View>
      //         <Text style={styles.author}>{props.creator.username}</Text>
      //         {props.location && (
      //           <Text style={styles.location}>{props.location}</Text>
      //         )}
      //       </View>
      //     </View>
      //   </TouchableOpacity>
      //   <FadeIn>
      //     <Image
      //       source={{ uri: props.file }}
      //       style={{ width, height: props.is_vertical ? 600 : 300 }}
      //     />
      //   </FadeIn>
      //   <View style={styles.photoMeta}>
      //     <View style={styles.comment}>
      //       <Text style={styles.commentAuthor}>
      //         {props.creator.username}{" "}
      //         <Text style={styles.message}>{props.caption}</Text>
      //       </Text>
      //     </View>
      //     {props.comments.length > 0 && (
      //       <TouchableOpacity
      //         onPressOut={() => navigation.navigate("Comments")}
      //       >
      //         <View style={styles.commentsLink}>
      //           {props.comments.length === 1 ? (
      //             <Text style={styles.linkText}>View 1 comment</Text>
      //           ) : (
      //             <Text style={styles.linkText}>
      //               View all {props.comments.length} comments
      //             </Text>
      //           )}
      //         </View>
      //       </TouchableOpacity>
      //     )}
      //     <Text style={styles.dateText}>
      //       {props.natural_time.toUpperCase()}
      //     </Text>
      //   </View>
      // </View>
      <View>
        <Text>HELLO?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width,
    marginBottom: 10,
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  author: {
    fontWeight: "600",
    marginBottom: 3,
    fontSize: 15,
  },
  location: {
    fontSize: 13,
  },
  photoMeta: {
    paddingHorizontal: 15,
  },
  comment: {
    marginTop: 5,
  },
  commentAuthor: {
    marginRight: 5,
    fontWeight: "600",
    fontSize: 14,
  },
  message: {
    fontWeight: "400",
    fontSize: 15,
  },
  commentsLink: {
    marginTop: 5,
  },
  linkText: {
    fontSize: 15,
    color: "#999",
  },
  dateText: {
    fontSize: 12,
    color: "#999",
    marginTop: 10,
  },
});

export default Dalgrak;
