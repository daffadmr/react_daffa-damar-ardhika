import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onDelete, onCheck}) => {
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
