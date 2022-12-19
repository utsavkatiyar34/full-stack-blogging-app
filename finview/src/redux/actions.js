import {
  LOGGEDIN_ERROR,
  LOGGEDIN_LOADING,
  LOGGEDIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./actionTypes";

//for signup
export const signupLoading = () => {
  return {
    type: SIGNUP_LOADING,
  };
};

export const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signupError = () => {
  return {
    type: SIGNUP_ERROR,
  };
};
//for login
export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};
//for get logged in user
export const getloggedinLoading = () => {
  return {
    type: LOGGEDIN_LOADING,
  };
};

export const getloggedinSuccess = (payload) => {
  return {
    type: LOGGEDIN_SUCCESS,
    payload,
  };
};

export const getloggedinError = () => {
  return {
    type: LOGGEDIN_ERROR,
  };
};
export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
