import {
  ADD_TODO,
  RESET_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "./types";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};

export const restTodoList = () => {
  return {
    type: RESET_TODO_LIST
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload
  };
};

export const fetchData = () => {
  return {
    type: FETCH_DATA
  };
};

export const fetchDataSuccess = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  };
};

export const fetchDataError = (payload) => {
  return {
    type: FETCH_DATA_ERROR,
    payload
  };
};
