import React from "react";

export default function TodoItem(todo, index) {
  return (
    <li className="flex flex-col sm:flex-row sm;items-center justify-between border-b-2 py-3 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span>{todo.text}</span>
      </div>
    </li>
  );
}
