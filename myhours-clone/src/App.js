
import { useSelector } from "react-redux";
import Footer from "./components/fw18-1237/Footer";
import Navbar from "./components/fw18-1237/Navbar";
import Home from "./components/Home";
import SimpleSidebar from "./pages/AuthorizedPage/dashboard"
import AllRoutes from "./Routes/AllRoutes";

function App() {

  const token = useSelector((state) => state.auth.token);

  if(token){
    return <SimpleSidebar/>
  }
  else return (
    <div>
      <Home/> 
</div>
)

}

export default App;
