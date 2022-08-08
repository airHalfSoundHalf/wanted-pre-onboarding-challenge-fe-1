import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import {
  IconPick,
  TodosSingleForm,
  TodosSingleInput,
  TodosSingleText,
  TodosSingleTextS,
} from "./TodoList/TodoListStyle";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <TodosSingleForm onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <TodosSingleInput
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <TodosSingleTextS>{todo.todo}</TodosSingleTextS>
      ) : (
        <TodosSingleText>{todo.todo}</TodosSingleText>
      )}

      <div>
        <IconPick
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </IconPick>
        <IconPick onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </IconPick>
        <IconPick onClick={() => handleDone(todo.id)}>
          <MdDone />
        </IconPick>
      </div>
    </TodosSingleForm>
  );
};

export default SingleTodo;
