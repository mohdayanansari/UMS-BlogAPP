import axios from "axios";

// making a axios instance::
const API = axios.create({
  baseURL: "https://umsblogapplication.herokuapp.com",
});

// it will execute before below requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// const url = "https://umsblogapplication.herokuapp.com/posts";
// !== =========================================== !==
export const fetchPosts = () => API.get("/posts");

export const createPosts = (newPost) => API.post("/posts", newPost);

// update post
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

// Delete Post
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Like Post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Signin
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
