import logo from './logo.svg';
import './App.css';
import {Route , Routes, Link} from 'react-router-dom'
import { Products } from './components/Products/Products';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import {Orders} from './components/Orders/Orders';
import {Cart} from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Link className='link' to={'/'}>Products</Link>
        <Link className='link' to={'/orders'}>Orders</Link>
        <Link className='link' to={'/cart'}>Cart</Link>
      </div>
      <Routes>
        <Route path="/" element={<Products/>} ></Route>
        <Route path="/product/:id" element={<ProductDetails/>} ></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
