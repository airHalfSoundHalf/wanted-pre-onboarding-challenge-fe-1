import React, { useState } from "react";
import { onRegister } from "./Auth.api";
import {
  AuthForm,
  Controller,
  FormButton,
  FormContainer,
  FormControlLabel,
} from "./LoginPageStyle";

const RegisterPage = () => {
  const [{ username, password, repeatPassword }, setRegisterData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");

  const register = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === repeatPassword) {
      onRegister({ username, password });
    } else {
      setError("동일한 비밀번호를 입력해주세요.");
    }
  };

  return (
    <AuthForm onSubmit={register}>
      <FormContainer>
        <FormControlLabel htmlFor="username">Username</FormControlLabel>
        <Controller
          name="username"
          value={username}
          onChange={(event) =>
            setRegisterData({
              username: event.target.value,
              password,
              repeatPassword,
            })
          }
        />
        <FormControlLabel htmlFor="password">password</FormControlLabel>
        <Controller
          type="password"
          name="password"
          value={password}
          onChange={(event) =>
            setRegisterData({
              username,
              password: event.target.value,
              repeatPassword,
            })
          }
        />
        <FormControlLabel htmlFor="repeatPassword">
          Repeat Password
        </FormControlLabel>
        <Controller
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={(event) =>
            setRegisterData({
              username,
              password,
              repeatPassword: event.target.value,
            })
          }
        />
        <FormButton type="submit">Register</FormButton>
        {error.length > 0 && <p>{error}</p>}
      </FormContainer>
    </AuthForm>
  );
};

export default RegisterPage;
