import React from "react";
import { Todo } from "../model";
import TodoItem from "./TodoItem";
import { Todos } from "./TodoListStyle";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleString("Ko-KR", { weekday: "long" });
  const undoneTasks = todos.filter((todo) => !todo.isDone);

  return (
    <>
      <h2>{dateString}</h2>
      <div className="day">{dayName}</div>
      <div className="tasks">할 일 {undoneTasks.length}개 남음</div>
      <div className="wrap">
        <Todos>
          {todos?.map((todo) => (
            <TodoItem
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
        </Todos>
      </div>
    </>
  );
};

export default TodoList;
