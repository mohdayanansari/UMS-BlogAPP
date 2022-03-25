import actionTypes from "../constants/actionTypes";

const initialState = {
  posts: [],
};
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE_POST:
      return [...state, action.payload];
    case actionTypes.UPDATE_POST:
    case actionTypes.LIKE_POST:
      return state?.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionTypes.DELETE_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return { ...state };
  }
};
