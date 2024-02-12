import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { UpdateSearchTerm, addTodo } from "./../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodoClick = function () {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(UpdateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mb-3 mt-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name="text"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-400 text-white rounded  hover:bg-blue-600"
          onClick={handleAddTodoClick}
        >
          <BsPlus />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4"></div>
        <div></div>

        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="text"
            id="addTodoInput"
            placeholder="search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            className="ml-4 p-2 bg-blue-400 text-white rounded  hover:bg-blue-600"
            onClick={handleAddTodoClick}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
