import { VERIFICATION_ACTION_TYPES } from "./verification.actionTypes";

export const VERIFICATION_INITIAL_STATE = {
  verificationStatus: "pending",
  typeSelect: 1,
  panMobileNumber: "",
  panFile: new File([], ""),
  panStatus: "pending",
  selfieImage: "",
  selfieStatus: "pending",
  bankFile: new File([], ""),
  bankStatementStatus: "pending",
  bankStatementPwd: 1,
  bankStatementTerms: false,
  verifyPassword: "",
  professionStatus: "pending",
  professionSelect: 1,
  workEmail: "",
  coPanGstStatus: "pending",
  coPan: "",
  coGst: "",
  dinStatus: "pending",
  dinNumber: "",
  employeeSelect: "",
};

export const verificationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case VERIFICATION_ACTION_TYPES.CHANGE_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    default:
      return state;
  }
};
