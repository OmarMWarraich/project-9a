import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// C
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop' element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
