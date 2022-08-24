import { createContext, useReducer } from "react";
import { createAction } from "../components/utils/create-action.utils";
import { USER_ACTION_TYPES } from "../reducers/user-data.actionTypes";
import {
  userDataReducer,
  USER_INITIAL_STATE,
} from "../reducers/user-data.reducer";

export const UserDataContext = createContext({
  mobileNumber: "",
  fullName: "",
  emailId: "",
  changeInput: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [{ mobileNumber, fullName, emailId }, dispatch] = useReducer(
    userDataReducer,
    USER_INITIAL_STATE
  );

  const changeInput = (name, value) => {
    dispatch(
      createAction(USER_ACTION_TYPES.CHANGE_INPUT, {
        name: name,
        value: value,
      })
    );
  };

  const value = {
    mobileNumber,
    fullName,
    emailId,
    changeInput,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
