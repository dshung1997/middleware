import { Types } from "./action";

const users = (state = [], action) => {
  if (action.type === Types.FETCH_USERS_SUCCESS) {
    return action.value;
  }

  return state;
};

export { users };
