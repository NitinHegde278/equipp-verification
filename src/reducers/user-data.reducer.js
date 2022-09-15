import { USER_ACTION_TYPES } from "./user-data.actionTypes";

export const USER_INITIAL_STATE = {
  mobileNumber: "",
  newUser: false,
  fullName: "",
  emailId: "",
  otp: "",
  addressSelect: 1,
};

export const userDataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.CHANGE_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    default:
      return state;
  }
};
