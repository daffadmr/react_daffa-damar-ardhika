import "./App.css";
import { todos } from "./todos";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header name="To do App" />
      <ul className="todo-list">
      {
        todos.map(todo => <li key={todo.id} className={!todo.completed ? "todo done" : "todo undone"}>{todo.title}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
