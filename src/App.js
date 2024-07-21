import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login'; // Import your Login component
import SignUp from './pages/SignUp/Signup'; // Import your SignUp component
import Footer from './components/Footer/Footer';
import './App.css';
import './components/ProductCard/ProductCard'; // Import ProductCard CSS for styling
import Checkout from './pages/Checkout/Checkout'; // Import your Checkout component

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
