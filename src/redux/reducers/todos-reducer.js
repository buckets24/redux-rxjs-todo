import {
  ADD_TODO,
  UPDATE_TODO,
  RESET_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED
} from "../actions/types";

const initalState = {
  counter: 0,
  list: [{ id: 0, text: "Make coffee", completed: false }]
};

const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log(action.payload)
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false }
        ]
      };
    };
    case UPDATE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case RESET_TODO_LIST:
      return initalState;
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        list: state.list.filter((todo) => !todo.completed
        )
      }
    default:
      return state;
  }
};

export default todosReducer;
