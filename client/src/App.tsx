import LoginPage from "./Pages/Auth/LoginPage";
import LoginRoute from "./routes/LoginRoute";

function App() {
  return <>{LoginPage() ? <LoginRoute /> : ""}</>;
}

export default App;
