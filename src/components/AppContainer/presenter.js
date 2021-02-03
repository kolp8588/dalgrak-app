import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { StatusBar, View, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";
import { COLORS } from "../../constants";
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { initApp } = this.props;
  }

  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <Fragment>
        <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'transparent'} />
        <View style={styles.container}>
          {isLoggedIn && profile ? (
            <RootNavigation screenProps={{ username: profile.username }} />
          ) : (
            <LoggedOutNavigation />
          )}
        </View>
      </Fragment>
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
