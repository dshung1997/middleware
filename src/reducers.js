import { users } from "./users/reducer";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({ users });

export { combinedReducers };
