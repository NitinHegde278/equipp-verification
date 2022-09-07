import { VERIFICATION_ACTION_TYPES } from "./verification.actionTypes";

export const VERIFICATION_INITIAL_STATE = {
  panMobileNumber: "",
  panFile: new File([], ""),
  panStatus: "pending",
  selfieImage: "",
  selfieStatus: "pending",
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
