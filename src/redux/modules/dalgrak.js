// Imports
import * as firebase from "firebase";
import "firebase/firestore";
import { actionCreators as userActions } from "./user";

// Actions

const SET_CATEGORY = "SET_CATEGORY";
const REFRESH_STATES = "REFRESH_STATES";

// Action Creators

function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}
function refreshStates() {
  return {
    type: REFRESH_STATES,
  };
}

// API Actions

function getCategories(parent) {
  return async (dispatch) => {
    if (parent.depth === 2 && parent.name !== "") {
      const url = await firebase
        .storage()
        .ref("images/categories/" + "apple" + ".jpg")
        .getDownloadURL();
      parent.imageUrl = url;
      dispatch(setCategory(parent));
      return null;
    }
    const result = [];
    try {
      const collection = await firebase
        .firestore()
        .collection("categories")
        // .where("depth", "==", parent.depth + 1)
        .where("parent", "==", parent.name)
        .get();

      if (!collection.empty) {
        for (let category of collection.docs) {
          const item = category.data();
          item.id = category.id;
          result.push(item);
        }
        return result;
      } else {
        console.log("NO DATA");
        return null;
      }
    } catch (error) {
      console.error("ERROR : ", error.message);
      return null;
    }
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return applySetCategory(state, action);
    case REFRESH_STATES:
      return applyRefreshStates();
    default:
      return state;
  }
}

// Reducer Actions

function applySetCategory(state, action) {
  const { category } = action;
  return {
    ...state,
    category,
  };
}

function applyRefreshStates() {
  return initialState;
}

// Exports

const actionCreators = {
  getCategories,
  refreshStates,
};

export { actionCreators };

// Default Reducer Export

export default reducer;
