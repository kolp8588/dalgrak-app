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
import { COLORS, FONTS } from "../../constants";

const { width, height } = Dimensions.get("window");

class Dalgrak extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.dalgrak}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <FadeIn>
            <Image
              source={{ uri: this.props.imageUrl }}
              style={{ width: 100, height: 100 }}
            />
          </FadeIn>
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: FONTS.SIZE.CONTENTS,
                color: COLORS.DALGRAK,
              }}
            >
              {this.props.category}
            </Text>
            <Text
              style={{
                fontSize: FONTS.SIZE.CONTENTS,
              }}
            >
              {this.props.quantity} {this.props.unit}
            </Text>
            <Text
              style={{
                fontSize: FONTS.SIZE.CONTENTS,
              }}
            >
              마감일 : {this.props.parseDate(this.props.date)}
            </Text>
            <Text
              style={{
                fontSize: FONTS.SIZE.CONTENTS,
              }}
            >
              참여업체 : {this.props.participants}
            </Text>
          </View>
        </View>
      </View>
      // <View style={styles.photo}>
      //   <FadeIn>
      //     <Image
      //       source={{ uri: this.props.file }}
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
      //           {this.props.comments.length === 1 ? (
      //             <Text style={styles.linkText}>View 1 comment</Text>
      //           ) : (
      //             <Text style={styles.linkText}>
      //               View all {this.props.comments.length} comments
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
    );
  }
}

const styles = StyleSheet.create({
  dalgrak: {
    width,
    marginVertical: 10,
    marginHorizontal: 10,
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
