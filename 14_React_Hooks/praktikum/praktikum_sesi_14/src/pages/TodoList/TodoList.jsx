import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import data from "../../data.json";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([...data]);
  const [inputTodo, setInputTodo] = useState("");
  const [tasksRemaining, setTasksRemaining] = useState(0)

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

  useEffect(() => { 
    setTasksRemaining(todos.filter(todo => !todo.completed).length) 
  }, [todos]);

  const handleDelete = (id) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodo);
  };

  const handleCheckbox = (todo) => {
    let checkedTodo = todos.map((data) =>
      data.id === todo.id ? { ...data, completed: !data.completed } : data
    );
    setTodos(checkedTodo);
  };

  return (
    <div className="todoList">
      <h1>todos</h1>
      <p>Kegiatan yang belum diselesaikan: <span style={tasksRemaining ? {color: "red"} : {color: "black"}}>{tasksRemaining}</span></p>
      <TodoForm
        addTodo={addTodo}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
      />
      <Todos
        todos={todos}
        onDelete={handleDelete}
        onCheck={handleCheckbox}
      />
    </div>
  );
};

export default TodoList;
