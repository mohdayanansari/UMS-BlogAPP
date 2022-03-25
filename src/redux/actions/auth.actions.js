import actionTypes from "../constants/actionTypes";
import * as api from "../../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: actionTypes.AUTH, data });
    // console.log(navigate)
    navigate("/")
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: actionTypes.AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
