import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Auth/LoginPage";
import RegisterPage from "../Pages/Auth/RegisterPage";

const LoginRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRoute;
