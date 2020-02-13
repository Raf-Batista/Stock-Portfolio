import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <div >
      <Home /> 
      <Navbar />
    </div>
  );
}

export default App;
