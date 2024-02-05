import { Routes, Route } from 'react-router-dom';

import styles from "./App.module.css";
import Tapbar from './components/Tapbar/Tapbar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import WatchCatalog from './components/WatchCatalog/WatchCatalog';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AddWatch from './components/AddWatch/AddWatch';
import Wishlist from './components/MyProfile/Wishlist/Wishlist';
import MyOrders from './components/MyProfile/MyOrders/MyOrders';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className={styles["app"]}>
      <Tapbar />
      <Navbar />
      <div className={styles["container"]}>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/watches' element={<WatchCatalog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addWatch' element={<AddWatch />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/myOrders' element={<MyOrders />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
