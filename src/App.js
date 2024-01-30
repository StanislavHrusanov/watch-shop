import { Routes, Route } from 'react-router-dom';

import './App.css';
import Tapbar from './components/Tapbar/Tapbar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Tapbar />
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
