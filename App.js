import React from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/redux/configureStore";
import AppContainer from "./src/components/AppContainer";
import firebase from "firebase";

import { FIREBASE_CONFIG } from "./src/firebaseConfig";

const { persistor, store } = configureStore();
!firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();

YellowBox.ignoreWarnings([
  "Setting a timer",
  "componentWillReceiveProps",
  "componentWillUpdate",
  "Animated: `useNativeDriver`",
]);

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo.png"),
        require("./assets/images/loading.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png"),
        require("./assets/images/farmer.png"),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font,
      }),
    ]);
  };
  _handleLoadingError = (error) => {
    console.error(error);
  };
  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true,
    });
  };
}

export default App;
