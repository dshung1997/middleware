import { get } from "./utils";

// TODO: put Types in another place
const Types = {
  FETCH_USERS: "FETCH_USERS",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",
};

const fetchUsers = () => ({
  type: Types.FETCH_USERS,
  promise: get("users"),
});

export { Types, fetchUsers };
