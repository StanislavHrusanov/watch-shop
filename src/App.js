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
import Edit from './components/Edit/Edit';
import Wishlist from './components/MyProfile/Wishlist/Wishlist';
import MyOrders from './components/MyProfile/MyOrders/MyOrders';
import Cart from './components/Cart/Cart';
import Purchase from './components/Cart/Purchase/Purchase';
import Purchases from './components/AdminProfile/Purchases';
import WatchCatalogType from './components/WatchCatalog/WatchCatalogType/WatchCatalogType';
import WatchCatalogBrand from './components/WatchCatalog/WatchCatalogBrand/WatchCatalogBrand';

import { LoadingProvider } from './contexts/LoadingContext';
import { PageProvider } from './contexts/PageContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className={styles["app"]}>
      <LoadingProvider>
        <PageProvider>
          <AuthProvider>
            <Tapbar />
            <Navbar />
            <div className={styles["container"]}>

              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/watches' element={<WatchCatalog />} />
                <Route path='/watches/types/:type' element={<WatchCatalogType />} />
                <Route path='/watches/brands/:brand' element={<WatchCatalogBrand />} />
                <Route path='/watches/:watchId' element={<Details />} />
                <Route path='/watches/:watchId/edit' element={<Edit />} />
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
          </AuthProvider>
        </PageProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
