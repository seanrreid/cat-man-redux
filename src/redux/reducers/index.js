import { combineReducers } from "redux";
import { ACTION_EAT, ACTION_SLEEP, ACTION_PLAY } from "../actions/actionTypes";

const initialState = {
  activity: "napping"
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_EAT:
      return {
        ...state,
        activity: "eating"
      };
    case ACTION_SLEEP:
      return {
        ...state,
        activity: "sleeping"
      };
    case ACTION_PLAY:
      return {
        ...state,
        activity: "playing"
      };
    default: {
      return state;
    }
  }
};

export default combineReducers({ activity: activityReducer });
