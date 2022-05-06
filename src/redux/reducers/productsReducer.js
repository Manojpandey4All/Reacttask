import { ActionTypes } from "../constants/action-types";

export const productsReducer = (state = [], { type, payload }) => {
  console.log({ payload });
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, payload };
    case ActionTypes.FAILURE_STATUS:
      return { ...state, filterFailProducts: payload };
    case ActionTypes.SUCCESS_STATUS:
      return { ...state, filterSuccessProducts: payload };
    default:
      return state;
  }
};
