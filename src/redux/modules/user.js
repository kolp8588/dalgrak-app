// Imports

import { API_URL, FB_APP_ID } from "../../constants";
import { Alert, AsyncStorage } from "react-native";
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import * as Facebook from "expo-facebook";
import firebase from "firebase";
import { dalgrakApp, secondaryApp } from "../../firebase";


// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_PROFILE = "SET_PROFILE";
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

function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile,
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
      const response = await dalgrakApp
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function () {
          return dalgrakApp.auth().signInWithEmailAndPassword(username, password);
        });
      if (response && response.user) {
        const request = {};
        request.username = response.user.email.split("@")[0];
        request.email = response.user.email;
        request.userId = response.user.uid;
        if (response.user.token == "") {
          console.log("No token")
        }
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
          request.token = token;
          
        } else {
          alert('Must use physical device for Push Notifications');
        }
        
        if (addProfile(request)) {
          dispatch(setLogIn(response.user.uid));
          dispatch(setUser(response.user));
          dispatch(setProfile(request));
          return true;
        }
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

        const response = await dalgrakApp
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            console.log(error.message);
          });
        if (response && response.user) {
          const request = {};
          request.userId = response.user.uid
          request.username = response.user.displayName

          if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
            request.token = token;
            
          } else {
            alert('Must use physical device for Push Notifications');
          }
          console.log(response.user)
          console.log(request)
          
          if (addProfile(request)) {
            dispatch(setLogIn(response.user.uid));
            dispatch(setUser(response.user));
            dispatch(setProfile(request));
            return true;
          }
        } else {
          return false;
        }
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
}
function submitProfile(profile) {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    if (addProfile(profile)) {
      const profileData = await getProfile(token)
      if (profileData != null) {
        dispatch(setProfile(profileData));
      }
      return true;
    }
    return false;
  };
}

async function addProfile(request) {
  try {
    const response = await dalgrakApp
      .firestore()
      .collection("users")
      .doc(request.userId)
      .set(request);
    if (response) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("ERROR : ", error.message);
  }
  return false;
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
  return async (dispatch, getState) => {
    const {
      user: {
        token,
      },
    } = getState();
    try {
      const profile = await getProfile(token)
      if (profile != null) {
        dispatch(setProfile(profile));
        return true;
      }
    } catch (error) {
      console.log(error)
    }
    return false;
  };
}

async function getProfile(userId) {
  try {
    const doc = await dalgrakApp
      .firestore()
      .collection("users")
      .doc(userId)
      .get();
    if (doc != null) {
      return doc.data();
      
    } else {
      console.log("NO DATA");
      return null;
    }
  } catch (error) {
    console.error("ERROR : ", error.message);
  }
  return null;
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
    case SET_PROFILE:
      return applySetProfile(state, action);
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
function applySetProfile(state, action) {
  const { profile } = action;
  return {
    ...state,
    profile: profile,
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
  submitProfile,
};

export { actionCreators };
// Default Reducer Export

export default reducer;
