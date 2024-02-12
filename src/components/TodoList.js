import { useSelector } from "react-redux";

export default function TodoList() {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchItem = state.searchTerm;

    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";
    });
  });

  return <div>TodoList</div>;
}
