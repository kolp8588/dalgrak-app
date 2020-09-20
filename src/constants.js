import { StyleSheet } from "react-native";

export const API_URL = "http://220da09e.ngrok.io";
export const FB_APP_ID = "332389001358220";

export const COLORS = {
  DALGRAK: "#23344E",
};

export const FONTS = {
  SIZE: {
    TITLE: 25,
    CONTENTS: 18,
    INFO: 15,
  },
};

export const COMMON_STYLES = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  FLEX_START: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  LIST: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
