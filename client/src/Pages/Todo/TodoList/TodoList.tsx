import React from "react";
import { Todo } from "../model";
import SingleTodo from "../SingleTodo";
import { Todos } from "./TodoListStyle";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <Todos>
      {todos?.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </Todos>
  );
};

export default TodoList;
