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
import Purchase from './components/Cart/Purchase/Purchase';
import Purchases from './components/AdminProfile/Purchases';
import WatchCatalogType from './components/WatchCatalog/WatchCatalogType/WatchCatalogType';

import { LoadingProvider } from './contexts/LoadingContext';
import { PageProvider } from './contexts/PageContext';
import WatchCatalogBrand from './components/WatchCatalog/WatchCatalogBrand/WatchCatalogBrand';

function App() {
  return (
    <div className={styles["app"]}>
      <LoadingProvider>
        <PageProvider>
          <Tapbar />
          <Navbar />
          <div className={styles["container"]}>

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/watches' element={<WatchCatalog />} />
              <Route path='/watches/types/:type' element={<WatchCatalogType />} />
              <Route path='/watches/brands/:brand' element={<WatchCatalogBrand />} />
              <Route path='/watches/:watchId' element={<Details />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/addWatch' element={<AddWatch />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/myOrders' element={<MyOrders />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/purchase' element={<Purchase />} />
              <Route path='/purchases' element={<Purchases />} />

            </Routes>
          </div>
          <Footer />
        </PageProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
