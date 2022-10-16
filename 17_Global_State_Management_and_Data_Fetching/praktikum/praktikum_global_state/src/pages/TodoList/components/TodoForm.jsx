import { useDispatch } from "react-redux";
import { newTodo } from "../../../store/features/todosSlice";

const TodoForm = ({ inputTodo, setInputTodo }) => {
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = inputTodo ? dispatch(newTodo(inputTodo)) : alert("Masukan to do!");
    setInputTodo("");

    return newTodos;
  };

  return (
    <div className="todoForm">
      <form>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handleChange}
          value={inputTodo}
        />
        <input type="submit" className="submitButton" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default TodoForm;