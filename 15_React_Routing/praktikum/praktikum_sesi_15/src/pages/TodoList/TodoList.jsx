import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import data from "../../data.json";
import { useState } from "react";
import Header from "../../components/Header";

const TodoList = () => {
  const [todos, setTodos] = useState([...data]);
  const [inputTodo, setInputTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
    let checkedTodo = todos.map((data) =>
      data.id === todo.id ? { ...data, completed: !data.completed } : data
    );
    setTodos(checkedTodo);
  };

  return (
    <>
      <Header about={"About"}/>
      <div className="todoList">
        <h1>todos</h1>
        <TodoForm
          addTodo={addTodo}
          inputTodo={inputTodo}
          setInputTodo={setInputTodo}
        />
        <Todos
          todos={todos}
          onDelete={handleDelete}
          onCheck={handleCheckbox}
          isChecked={isChecked}
        />
      </div>
    </>
  );
};

export default TodoList;
