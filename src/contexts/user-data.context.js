import { createContext, useReducer } from "react";
import { createAction } from "../utils/create-action.utils";
import { USER_ACTION_TYPES } from "../reducers/user-data.actionTypes";
import {
  userDataReducer,
  USER_INITIAL_STATE,
} from "../reducers/user-data.reducer";

export const UserDataContext = createContext({
  mobileNumber: "",
  newUser: false,
  fullName: "",
  emailId: "",
  otp: "",
  addressSelect: 1,
  changeInput: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, USER_INITIAL_STATE);

  const changeInput = (name, value) => {
    dispatch(
      createAction(USER_ACTION_TYPES.CHANGE_INPUT, {
        name: name,
        value: value,
      })
    );
  };

  const value = {
    ...state,
    changeInput,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
