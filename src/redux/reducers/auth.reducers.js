import actionTypes from "../constants/actionTypes";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      //storing the user auth data in the browser local storage maintaining the session:::
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case actionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
