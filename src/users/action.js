import { get } from "../utils";
import { Types } from "./type";

const fetchUsers = () => ({
  type: Types.FETCH_USERS,
  promise: get("users"),
});

export { fetchUsers };
