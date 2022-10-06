import React, { useState } from "react";
import Todos from "./Todos";

import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import TodoFrom from "./TodoFrom";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id === id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>ToDO App</h1>
      <TodoFrom onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
