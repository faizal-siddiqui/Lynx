import './App.css';
import AddData from './admin/AddData';
import AllRoutes from './Routes/AllRoutes';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

  // <Link to='/cart/address' >Address</Link>
  // <Link to='/cart' >Cart</Link>
  // <Link to='/payment' >Payment</Link>
  // <Link to='/products/tshirt' >Products</Link>
  // <Link to='/products/tshit/1' >Tshirt</Link>
  // <Link to='/signin' >SignIn</Link>
  // <Link to='/signup' >SignUp</Link>