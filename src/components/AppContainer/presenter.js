import React, { Component } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { initApp } = this.props;
    initApp();
  }

  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn && profile ? (
          <RootNavigation screenProps={{ username: profile.username }} />
        ) : (
          <LoggedOutNavigation />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default AppContainer;
