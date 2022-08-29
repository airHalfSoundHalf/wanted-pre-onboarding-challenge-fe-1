import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onLogin } from "./Auth.api";
import {
  GotoTodoList,
  AuthForm,
  Controller,
  FormButton,
  FormContainer,
  FormTitle,
  Register,
} from "./LoginPageStyle";
import { Helmet } from "react-helmet-async";
import { HiLogin } from "react-icons/hi";

const LoginPage = () => {
  const navigate = useNavigate();
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

  const GotoTodosHandler = () => {
    navigate(`/wanted-pre-onboarding-challenge-fe-1`);
  };

  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <GotoTodoList onClick={GotoTodosHandler}>
        <HiLogin />
      </GotoTodoList>
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
    </>
  );
};

export default LoginPage;
