// Imports
import * as firebase from "firebase";
import { actionCreators as userActions } from "./user";

// Actions

const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";

// Action Creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed,
  };
}

function setSearch(search) {
  return {
    type: SET_SEARCH,
    search,
  };
}

// API Actions

function getCategories() {
  return async (dispatch) => {
    const response = await firebase
      .database()
      .ref("categories")
      .orderByChild("depth")
      .equalTo(depth);
    const result = [];

    console.log(response);
    response.on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        const item = snap.val();
        item.key = snap.key;
        result.push(item);
      });
    });
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case SET_SEARCH:
      return applySetSearch(state, action);
    default:
      return state;
  }
}

// Reducer Actions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed,
  };
}

function applySetSearch(state, action) {
  const { search } = action;
  return {
    ...state,
    search,
  };
}

// Exports

const actionCreators = {
  getCategories,
};

export { actionCreators };

// Default Reducer Export

export default reducer;
