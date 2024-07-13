import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import Cart from './components/Cart/Cart';
import Login from './pages/Login/Login'; // Import your Login component
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} /> {/* Add route for Login */}
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
