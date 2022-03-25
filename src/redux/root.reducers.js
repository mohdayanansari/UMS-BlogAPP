import { combineReducers } from "redux";
// import { productReducer, selectedProduct } from "./product.reducer";
import { PostReducer } from "./reducers/posts.reducers";
import { authReducer } from "./reducers/auth.reducers";

const reducers = combineReducers({
  posts: PostReducer,
  auth: authReducer,
});

export default reducers;
