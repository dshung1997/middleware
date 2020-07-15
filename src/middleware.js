import { Types } from "./action";

const customMiddleWare = (store) => (next) => (action) => {
  if (action.type === Types.FETCH_USERS) {
    action.promise
      .then((data) => {
        next({
          type: Types.FETCH_USERS_SUCCESS,
          value: data,
        });
      })
      .catch((e) => {
        next({
          type: Types.FETCH_USERS_FAILURE,
          value: e,
        });
      });
  } else {
    next(action);
  }
};

export { customMiddleWare };
