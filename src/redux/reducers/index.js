import { combineReducers } from "redux";

import todosReducer from "./todos-reducer";
import productsReducer from "./products-reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  products: productsReducer
});

export default rootReducer;
