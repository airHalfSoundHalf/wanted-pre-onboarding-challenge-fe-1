import React, { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList/TodoList";
import { Todo } from "./model";
import { Wrap, GotoAuth, Container, Content } from "./TodoList/TodoListStyle";
import { Helmet } from "react-helmet-async";
import { HiLogin } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const GoToAuthHandler = () => {
    navigate(`/users/login`);
  };

  console.log(todos);

  return (
    <Wrap>
      <Helmet>
        <title>투두리스트</title>
      </Helmet>
      <GotoAuth onClick={GoToAuthHandler}>
        <HiLogin />
      </GotoAuth>
      <Container>
        <Content>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos={setTodos} />
        </Content>
      </Container>
    </Wrap>
  );
};

export default Todos;
