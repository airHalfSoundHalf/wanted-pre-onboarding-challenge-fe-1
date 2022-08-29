import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import Todos from "../pages/Todos";

function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/create" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
