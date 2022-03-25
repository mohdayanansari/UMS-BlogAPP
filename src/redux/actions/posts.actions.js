import * as api from "../../api";
import actionTypes from "../constants/actionTypes";
//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
  //   const action = { type: "FETCH_ALL", payload: [] };
  //   dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);

    dispatch({ type: actionTypes.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actionTypes.UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: actionTypes.DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// like post

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: actionTypes.LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
