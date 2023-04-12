import * as actionTypes from "../constants/userConstant";

export const getUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return { user: action.payload };

    case actionTypes.GET_USER_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
