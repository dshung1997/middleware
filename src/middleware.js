import { Types } from "./action";

const customMiddleWare = (store) => (next) => (action) => {
  if (action.type === Types.FETCH_USERS) {
    next({ type: Types.FETCH_USERS });

    action.promise
      .then((data) => {
        setTimeout(() => {
          next({
            type: Types.FETCH_USERS_SUCCESS,
            value: data,
          });
        }, 3000);
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
