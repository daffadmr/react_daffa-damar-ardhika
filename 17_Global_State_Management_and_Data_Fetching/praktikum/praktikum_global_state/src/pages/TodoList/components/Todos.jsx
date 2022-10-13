import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
