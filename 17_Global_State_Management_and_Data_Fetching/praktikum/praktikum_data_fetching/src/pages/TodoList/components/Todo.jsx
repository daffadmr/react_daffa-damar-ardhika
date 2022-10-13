import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../../store/features/todosSlice";

const Todo = ({ todo, isChecked }) => {
  const dispatch = useDispatch();

  const { id, completed } = todo;

  return (
    <div className="todo">
      {
        <>
          <li className={todo.completed ? "done" : "undone"}>
            <input
              type="checkbox"
              onChange={() => dispatch(completeTodo({ id, completed }))}
              defaultChecked={todo.completed ? !isChecked : isChecked}
            />
            {todo.title}
          </li>
        </>
      }
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default Todo;
