import { Routes, Route } from 'react-router-dom';

import './App.css';
import Tapbar from './components/Tapbar/Tapbar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Tapbar />
      <Navbar />
    </div>
  );
}

export default App;
