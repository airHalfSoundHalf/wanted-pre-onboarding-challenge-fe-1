import React, { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList/TodoList";
import { Todo } from "./model";
import { TodoTitle, Wrap } from "./TodoList/TodoListStyle";

const Todos = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <Wrap>
      <TodoTitle>Todo List</TodoTitle>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {Todos.length === 0 ? null : (
        <TodoList todos={todos} setTodos={setTodos} />
      )} */}
    </Wrap>
  );
};

export default Todos;
