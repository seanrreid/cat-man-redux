import { combineReducers } from "redux";

const initialState = {
  activity: "napping"
};

const ACTION_SET_ACTIVITY = "activity";

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload.activity
      };
    default: {
      return state;
    }
  }
};

export default combineReducers({ activity: activityReducer });
