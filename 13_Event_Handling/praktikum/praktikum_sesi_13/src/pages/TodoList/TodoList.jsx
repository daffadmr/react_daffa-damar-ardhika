import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import data from "../../data.json";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([...data]);

  const addTodo = (userInput) => {
    let newTodo = [...todos];
    newTodo = [
      ...newTodo,
      {
        id: Math.floor(Math.random() * 1000),
        title: userInput,
        completed: false,
      },
    ];
    setTodos(newTodo);
  };

  const handleDelete = (id) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodo);
  };

  const handleCheckbox = (todo) => {
    let checkedTodo = todos.map((data) => (data.id === todo.id ? { ...data, completed: !data.completed } : data));
    setTodos(checkedTodo);
  };

  return (
    <div className="todoList">
      <h1>todos</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} onDelete={handleDelete} checked={handleCheckbox}  />
    </div>
  );
};

export default TodoList;
