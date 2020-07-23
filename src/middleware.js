import { Types } from "./action";

const customMiddleWare = (store) => (next) => (action) => {
  if (action.promise && typeof action.promise.then === "function") {
    next({ type: Types.FETCH_USERS });

    action.promise
      .then((data) => {
        next({
          type: action.type + "_SUCCESS",
          value: data,
        });
      })
      .catch((e) => {
        next({
          type: action.type + "_FAILURE",
          value: e,
        });
      });
  } else {
    next(action);
  }
};

export { customMiddleWare };
