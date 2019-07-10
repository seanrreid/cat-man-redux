// export const catAction = activity => ({
//   type: "activity",
//   payload: {
//     activity
//   }
// });

import { ACTION_SLEEP, ACTION_EAT, ACTION_PLAY } from "./actionTypes";

export const sleep = () => {
  return {
    type: ACTION_SLEEP
  };
};

export const eat = () => {
  return {
    type: ACTION_EAT
  };
};

export const play = () => {
  return {
    type: ACTION_PLAY
  };
};
