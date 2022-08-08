import React, { useRef } from "react";
import { Controller, FormButton, FormWrapper } from "./TodoList/TodoListStyle";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormWrapper
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <Controller
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
      />
      <FormButton type="submit">Go</FormButton>
    </FormWrapper>
  );
};

export default InputField;
