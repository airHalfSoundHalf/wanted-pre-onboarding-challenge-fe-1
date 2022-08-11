import React, { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList/TodoList";
import { Todo } from "./model";
import { Container, Content, TodoTitle, Wrap } from "./TodoList/TodoListStyle";

// const todoss = null;

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
      <Container>
        <Content>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos={setTodos} />
          {/* {/* {Todos.length === 0 ? null : (
        <TodoList todos={todos} setTodos={setTodos} />
      )} */}
        </Content>
      </Container>
    </Wrap>
  );
};

export default Todos;
