import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  console.log({ products });
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setFailureStatus = (data) => {
  console.log("failure data", data);
  return {
    type: ActionTypes.FAILURE_STATUS,
    payload: data,
  };
};
export const setSuccessStatus = (data) => {
  console.log("successdata", data);
  return {
    type: ActionTypes.SUCCESS_STATUS,
    payload: data,
  };
};
