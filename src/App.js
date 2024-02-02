import { Routes, Route } from 'react-router-dom';

import './App.css';
import Tapbar from './components/Tapbar/Tapbar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import WatchCatalog from './components/WatchCatalog/WatchCatalog';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Tapbar />
      <Navbar />
      <div className="container">

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/watches' element={<WatchCatalog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
