
import Footer from './components/utkarsh/Footer';
import Navbar from './components/utkarsh/Navbar';
import SimpleSidebar from './pages/AuthorizedPage/dashboard';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div>
      <Navbar/>
        <AllRoutes/>
        <Footer/>
         {/* <SimpleSidebar/> */}
    </div>
  );
}

export default App;
