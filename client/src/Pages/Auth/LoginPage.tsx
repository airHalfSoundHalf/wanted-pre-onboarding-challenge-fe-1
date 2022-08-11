import React, { useState } from "react";
import { Link } from "react-router-dom";
import { onLogin } from "./Auth.api";
import {
  AuthForm,
  Controller,
  FormButton,
  FormContainer,
  FormTitle,
  Register,
} from "./LoginPageStyle";

const LoginPage = () => {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      username,
      password,
    });
    if (response && response.error) {
      setError(response.error);
    }
  };

  return (
    <AuthForm onSubmit={login}>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <Controller
          placeholder="Username"
          value={username}
          onChange={(event) =>
            setCredentials({
              username: event.target.value,
              password,
            })
          }
        />
        <Controller
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) =>
            setCredentials({
              username,
              password: event.target.value,
            })
          }
        />
        <FormButton type="submit">Log in</FormButton>
        <Register>
          <Link to="/register">회원가입</Link>
        </Register>
        {error.length > 0 && <p>{error}</p>}
      </FormContainer>
    </AuthForm>
  );
};

export default LoginPage;
