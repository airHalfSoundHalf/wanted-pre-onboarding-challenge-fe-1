import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import Todos from "../pages/Todo";

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: absolute;
  top: 0;

  & a {
    padding: 30px 40px;
    font-size: 20px;
    text-decoration: none;
    color: #222;
  }
`;

function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Wrap>
          <Link to="/login">Login</Link>
          <Link to="/todolist">Todo List</Link>
        </Wrap>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/todolist" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
