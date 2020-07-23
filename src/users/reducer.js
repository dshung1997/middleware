import { Types } from "./type";

const users = (state = [], action) => {
  if (action.type === Types.FETCH_USERS_SUCCESS) {
    return [...state, ...action.value];
  }

  return state;
};

export { users };
