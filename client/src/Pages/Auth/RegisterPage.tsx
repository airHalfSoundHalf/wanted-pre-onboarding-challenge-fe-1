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
  const [{ email, password, repeatPassword }, setRegisterData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");

  const register = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === repeatPassword) {
      onRegister({ email, password });
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
          value={email}
          onChange={(event) =>
            setRegisterData({
              email: event.target.value,
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
              email,
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
              email,
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
