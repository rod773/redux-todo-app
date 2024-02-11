import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETED,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

const initialState = {
  todos: [],
  filter: "ALL",
  searchItem: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchItem: state.searchItem,
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === index.action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchItem: state.searchItem,
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(
          (todo, index) => index !== index.action.payload.id
        ),
        filter: state.filter,
        searchItem: state.searchItem,
      };
    default:
      break;
  }
};

export default todoReducer;
