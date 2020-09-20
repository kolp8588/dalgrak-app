// Imports

import { API_URL, FB_APP_ID } from "../../constants";
import { Alert, AsyncStorage } from "react-native";
import { Permissions, Notifications } from "expo";
import * as Facebook from "expo-facebook";
import firebase from "firebase";

// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

// Action Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token,
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

function logOut() {
  return { type: LOG_OUT };
}

function setNotifications(notifications) {
  return {
    type: SET_NOTIFICATIONS,
    notifications,
  };
}

// API Actions

function login(username, password) {
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function () {
          return firebase.auth().signInWithEmailAndPassword(username, password);
        });
      if (response && response.user) {
        dispatch(setLogIn(response.user.uid));
        dispatch(setUser(response.user));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
}
function facebookLogin() {
  return async (dispatch) => {
    try {
      await Facebook.initializeAsync(FB_APP_ID);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);

        const response = await firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            console.log(error.message);
          });
        if (response && response.user) {
          dispatch(setLogIn(response.user.uid));
          dispatch(setUser(response.user));
          return true;
        } else {
          return false;
        }
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
}

function getNotifications() {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch(`${API_URL}/notifications/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then((json) => dispatch(setNotifications(json)));
  };
}

function getOwnProfile() {
  return (dispatch, getState) => {
    const {
      user: {
        token,
        profile: { username },
      },
    } = getState();
    fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then((json) => dispatch(setUser(json)));
  };
}

function registerForPush() {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus === "denied") {
      return;
    }

    let pushToken = await Notifications.getExpoPushTokenAsync();

    console.log(pushToken);

    return fetch(`${API_URL}/users/push/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({
        token: pushToken,
      }),
    });
  };
}

// Initial State

const initialState = {
  isLoggedIn: false,
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case SET_NOTIFICATIONS:
      return applySetNotifications(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyLogIn(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token,
  };
}

function applyLogOut(state, action) {
  AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
    token: "",
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user,
  };
}

function applySetNotifications(state, action) {
  const { notifications } = action;
  return {
    ...state,
    notifications,
  };
}

// Exports

const actionCreators = {
  login,
  facebookLogin,
  logOut,
  getNotifications,
  getOwnProfile,
  registerForPush,
};

export { actionCreators };
// Default Reducer Export

export default reducer;
