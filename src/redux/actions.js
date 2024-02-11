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

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncompleted = (id) => ({
  type: MARK_INCOMPLETED,
  payload: { id },
});

export const filterTodos = (filer) => ({
  type: FILTER_TODOS,
  payload: { filer },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const UpdateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
