import React from "react";

const Todo = ({ todo, onDelete, onCheck, isChecked }) => {
  return (
    <div className="todo">
      {
        <>
          <li className={todo.completed ? "done" : "undone"}>
            <input
              type="checkbox"
              onChange={() => onCheck(todo)}
              defaultChecked={todo.completed ? true : false}
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
