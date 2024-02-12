import { useSelector } from "react-redux";

export default function TodoList() {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";

      const matchSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchFilter && matchSearch;
    });
  });

  console.log("Filtered Todos: ", filteredTodos);

  return (
    <div>
      <ul>
        <li className="my-2 text-sm-italic">All Your Notes Here...</li>

        {filteredTodos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
