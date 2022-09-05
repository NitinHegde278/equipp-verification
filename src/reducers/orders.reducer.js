import { ORDERS_ACTION_TYPES } from "./orders.actionTypes";

export const ORDERS_INITIAL_STATE = [];

export const ordersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDERS_ACTION_TYPES.ADD_ORDERS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
