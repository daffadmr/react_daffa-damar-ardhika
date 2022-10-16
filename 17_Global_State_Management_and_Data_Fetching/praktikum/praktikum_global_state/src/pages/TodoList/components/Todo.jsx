import React from "react";
import { useDispatch } from "react-redux";
import { handleCheckbox, handleDelete } from "../../../store/features/todosSlice";

const Todo = ({ todo, isChecked }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      {
        <>
          <li className={todo.completed ? "done" : "undone"}>
            <input
              type="checkbox"
              onChange={() => dispatch(handleCheckbox(todo.id))}
              defaultChecked={todo.completed ? !isChecked : isChecked}
            />
            {todo.title}
          </li>
        </>
      }
      <button onClick={() => dispatch(handleDelete(todo.id))}>Delete</button>
    </div>
  );
};

export default Todo;
