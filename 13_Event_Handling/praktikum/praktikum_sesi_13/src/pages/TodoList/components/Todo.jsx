import React from "react";
import { useState } from "react";

const Todo = ({ todo, onDelete, checked }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="todo">
      {
        <>
          <li className={todo.completed ? "done" : "undone"}>
            <input
              type="checkbox"
              onClick={() => checked(todo)}
              defaultChecked={todo.completed ? isChecked : !isChecked}
            />
            {todo.title}
          </li>
        </>
      }
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
