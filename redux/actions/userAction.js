import axios from "axios";
import * as actionType from "../constants/userConstant";

const URL = "http://10.0.2.2:8000";

export const getUser = (email) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/getUser/${email}`);
    dispatch({ type: actionType.GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_USER_FAIL, payload: error.message });
  }
};
