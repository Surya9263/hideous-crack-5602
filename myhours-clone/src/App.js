import logo from './logo.svg';
import './App.css';
import Pricing from './components/Pricing_page/Pricing';
import Login from './AuthPages/SignIn';
import Signup from './AuthPages/SignUp';
import Terms from './AuthPages/Terms';
import Success from './AuthPages/Success';

function App() {
  return (
    <div>
     {/* <Pricing/> */}
     {/* <Login/>
     <Signup/>
     <Terms/> */}
     <Success/>
    </div>
  );
}

export default App;
