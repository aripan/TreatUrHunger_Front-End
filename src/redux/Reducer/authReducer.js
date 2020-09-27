import * as ActionTypes from "../ActionTypes";

// The auth reducer.
// The starting state sets authentication based on a token stored in local storage.
// In a real app, we would also want a function to check if the token is expired.
export const Auth = (
  state = {
    isLoading: false,
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    user: localStorage.getItem("creds")
      ? JSON.parse(localStorage.getItem("creds"))
      : null,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    // REGISTRATION FUNCTIONALITY
    case ActionTypes.REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: action.creds,
      };

    case ActionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: "",
        token: action.token,
      };

    case ActionTypes.REGISTRATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message,
      };

    // LOGIN FUNCTIONALITY
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: action.creds,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: "",
        token: action.token,
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message,
      };

    // LOGOUT FUNCTIONALITY
    case ActionTypes.LOGOUT_REQUEST:
      return { ...state, isLoading: true, isAuthenticated: true };

    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: "",
        user: null,
      };

    // DEFAULT
    default:
      return state;
  }
};
