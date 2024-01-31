import { Routes, Route } from 'react-router-dom';

import './App.css';
import Tapbar from './components/Tapbar/Tapbar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Tapbar />
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
