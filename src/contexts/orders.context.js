import { createContext, useEffect, useReducer } from "react";
import { ORDERS_ACTION_TYPES } from "../reducers/orders.actionTypes";
import {
  ordersReducer,
  ORDERS_INITIAL_STATE,
} from "../reducers/orders.reducer";
import { ORDERS } from "../utils/constants";
import { createAction } from "../utils/create-action.utils";

export const OrdersContext = createContext(ORDERS_INITIAL_STATE);

export const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, ORDERS_INITIAL_STATE);

  useEffect(() => {
    dispatch(createAction(ORDERS_ACTION_TYPES.ADD_ORDERS, ORDERS));
  }, []);

  const value = {
    ...state,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};
