import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/features/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.data);
  const fetchStatus = useSelector((state) => state.todos.fetchStatus)
  const [inputTodo, setInputTodo] = useState("");
  const homeNav = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "About",
      route: "/about"}
  ]

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, fetchStatus]);

  return (
    <>
      <Header data={homeNav}/>
      <div className="todoList">
        <h1>todos</h1>
        <TodoForm inputTodo={inputTodo} setInputTodo={setInputTodo} />
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default TodoList;
