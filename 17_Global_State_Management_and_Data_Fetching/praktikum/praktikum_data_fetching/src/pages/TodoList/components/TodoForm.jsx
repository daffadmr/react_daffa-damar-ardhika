import { useDispatch } from "react-redux";
import { createTodo } from "../../../store/features/todosSlice";

const TodoForm = ({ inputTodo, setInputTodo }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");

    let newTodos = title
      ? dispatch(createTodo({ title }))
      : alert("Masukan to do!");
    setInputTodo("");

    return newTodos;
  };

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handleChange}
          value={inputTodo}
          name="title"
        />
        <input type="submit" className="submitButton"/>
      </form>
    </div>
  );
};

export default TodoForm;
