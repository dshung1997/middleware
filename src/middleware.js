import { Types } from "./users/type";

const customMiddleWare = (store) => (next) => (action) => {
  if (action.promise && typeof action.promise.then === "function") {
    next({ type: Types.FETCH_USERS });

    action.promise.then((response) => {
      next({
        type: action.type + "_" + response.status,
        value: response.data,
      });
    });
  } else {
    next(action);
  }
};

export { customMiddleWare };
