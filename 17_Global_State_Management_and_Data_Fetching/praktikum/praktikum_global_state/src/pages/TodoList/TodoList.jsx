import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [inputTodo, setInputTodo] = useState("");

  const homeNav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  return (
    <>
      <Header data={homeNav} />
      <div className="todoList">
        <h1>todos</h1>
        <TodoForm inputTodo={inputTodo} setInputTodo={setInputTodo} />
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default TodoList;
