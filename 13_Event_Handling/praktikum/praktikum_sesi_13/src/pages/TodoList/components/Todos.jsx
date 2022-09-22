import React from "react";
import Todo from "./Todo";

const Todos = ({todos, onDelete, checked}) => {
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} checked={checked}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
