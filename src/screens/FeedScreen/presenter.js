import React from "react";
import PropTypes from "prop-types";
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import Dalgrak from "../../components/Dalgrak";
import { COLORS } from "../../constants";

const FeedScreen = (props) => (
  <ScrollView
    style={{ backgroundColor: "white" }}
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    <StatusBar
      translucent
      animated={false}
      hidden={false}
      backgroundColor={COLORS.DALGRAK} //Android
      barStyle="light-content" // IOS
    />
    <View style={styles.container}>
      {props.feed &&
        props.feed.map((dalgrak, index) => {
          dalgrak.idx = index;
          return <Dalgrak {...dalgrak} key={dalgrak.id} />;
        })}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "white",
    //marginHorizontal: 20,
  },
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  feed: PropTypes.array,
};

export default FeedScreen;
