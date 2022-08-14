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
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      email,
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
          value={email}
          onChange={(event) =>
            setCredentials({
              email: event.target.value,
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
              email,
              password: event.target.value,
            })
          }
        />
        <FormButton type="submit">Log in</FormButton>
        <Register>
          <Link to="/users/create">회원가입</Link>
        </Register>
        {error.length > 0 && <p>{error}</p>}
      </FormContainer>
    </AuthForm>
  );
};

export default LoginPage;
