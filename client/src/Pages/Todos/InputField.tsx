import React, { useEffect, useRef, useState } from "react";
import {
  Controller,
  FormButton,
  FormWrapper,
  InsertForm,
} from "./TodoList/TodoListStyle";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputRefFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRefFocus.current?.focus();
  }, []);

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <FormWrapper
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      {open && (
        <InsertForm>
          <Controller
            autoFocus
            ref={inputRefFocus}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="입력해주세요."
          />
        </InsertForm>
      )}
      <FormButton type="submit" onClick={onToggle} open={open}>
        등록
      </FormButton>
    </FormWrapper>
  );
};

export default InputField;
