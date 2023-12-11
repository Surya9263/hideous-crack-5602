import Home from "./components/Home";
import { useSelector } from "react-redux";
import SimpleSidebar from "./pages/AuthorizedPage/dashboard";

function App() {
  const token = useSelector((state) => state.auth.token);
  return token ? <SimpleSidebar /> : <Home />;
}

export default App;
