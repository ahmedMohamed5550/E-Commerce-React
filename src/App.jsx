import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import ProductList from './components/ProductList.jsx';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductList/>
    </div>
  );
}

export default App;
