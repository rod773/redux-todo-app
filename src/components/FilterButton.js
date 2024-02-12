import React from "react";

const FilterButton = () => {
  return (
    <div className="flex space-x-4 items-center">
      <select className="text-sm px-2 py-1 rounded border border-gray-300">
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>
    </div>
  );
};

export default FilterButton;
