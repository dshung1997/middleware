import { Types } from "./action";

// TODO: use combineReducer
const users = (state = [], action) => {
  if (action.type === Types.FETCH_USERS_SUCCESS) {
    return [...state, ...action.value];
  }

  return state;
};

export { users };
