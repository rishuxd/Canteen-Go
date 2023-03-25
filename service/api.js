import axios from "axios";

const URL = "http://10.0.2.2:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling SignUp API ", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling Login API ", error);
  }
};

export const placeOrder = async (data) => {
  try {
    return await axios.post(`${URL}/orders`, data);
  } catch (error) {
    console.log("Error while calling Order API ", error);
  }
};
