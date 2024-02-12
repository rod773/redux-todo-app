import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function TodoItem(todo, index) {
  return (
    <li className="flex flex-col sm:flex-row sm;items-center justify-between border-b-2 py-3 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-throught text-500-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button>{todo.completed ? <FaToggleOff /> : <FaToggleOn />}</button>
      </div>
    </li>
  );
}
