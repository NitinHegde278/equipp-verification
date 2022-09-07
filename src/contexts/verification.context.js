import { createContext, useReducer } from "react";
import { VERIFICATION_ACTION_TYPES } from "../reducers/verification.actionTypes";
import {
  verificationReducer,
  VERIFICATION_INITIAL_STATE,
} from "../reducers/verification.reducer";
import { createAction } from "../utils/create-action.utils";

export const VerificationContext = createContext({
  panMobileNumber: "",
  panFile: new File([], ""),
  panStatus: "pending",
  selfieImage: "",
  selfieStatus: "pending",
  changeInput: () => {},
});

export const VerificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    verificationReducer,
    VERIFICATION_INITIAL_STATE
  );

  const changeInput = (name, value) => {
    dispatch(
      createAction(VERIFICATION_ACTION_TYPES.CHANGE_INPUT, {
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
    <VerificationContext.Provider value={value}>
      {children}
    </VerificationContext.Provider>
  );
};
