import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS
} from "../actions/types";

const initalState = {
  data: [],
  flag: null,
  error: null
};

const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        flag: "loading"
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        flag: "success",
        data: action.payload
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        flag: "error",
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
