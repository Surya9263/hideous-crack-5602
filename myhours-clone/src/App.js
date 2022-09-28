import logo from './logo.svg';
import './App.css';
import Pricing from './components/Pricing_page/Pricing';
import Login from './AuthPages/SignIn';
import Signup from './AuthPages/SignUp';
import Terms from './AuthPages/Terms';

function App() {
  return (
    <div className="App">
     {/* <Pricing/> */}
     <Login/>
     <Signup/>
     <Terms/>
    </div>
  );
}

export default App;
