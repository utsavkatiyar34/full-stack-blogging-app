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

const initialState = {
  signup: {
    loading: false,
    error: false,
    status: false,
    email: null,
  },
  login: {
    loading: false,
    error: false,
    status: false,
    token: null,
  },
  loggedinuser: {
    loading: false,
    error: false,
    user: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true,
          error: false,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          error: false,
          status: true,
          email: action.payload,
        },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          error: true,
        },
      };
    case LOGIN_LOADING:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          error: false,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: false,
          status: true,
          token: action.payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: true,
        },
      };
    case LOGGEDIN_LOADING:
      return {
        ...state,
        loggedinuser: {
          ...state.loggedinuser,
          loading: true,
          error: false,
        },
      };
    case LOGGEDIN_SUCCESS:
      return {
        ...state,
        loggedinuser: {
          ...state.loggedinuser,
          loading: false,
          error: false,
          user: action.payload,
        },
      };
    case LOGGEDIN_ERROR:
      return {
        ...state,
        loggedinuser: {
          ...state.loggedinuser,
          loading: false,
          error: true,
        },
      };
      case LOGOUT:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: false,
          status: false,
          token: null,
        },
      };
    default:
      return { ...state };
  }
};
