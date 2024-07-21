import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import searchIcon from '../../assets/magnifying-glass.svg';
import CartPreview from './CartPreview'; // Import the CartPreview component

const Header = () => {
  const [query, setQuery] = useState('');
  const [cartVisible, setCartVisible] = useState(false); // State to manage cart visibility

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      // Navigate to products page with search query
      setQuery('');
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleAccountClick = () => {
    // Handle account click based on login status
  };

  const toggleCartPreview = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <>
      <div className="banner">
        <span role="img" aria-label="Gift Emoji">🎁</span> Free Gifts <span role="img" aria-label="Gift Emoji">🎁</span> <Link to="/offer" style={{ color: '#fff' }}>Ohara Launch Promotion</Link>
      </div>
      <header className="header">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">kbeauty klub</h1>
          </Link>
        </div>
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search products..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <img src={searchIcon} alt="Search" />
            </button>
          </form>
        </div>
        <div className="nav-links">
          <Link to="/login" className="account-button">
            <FontAwesomeIcon icon={faUser} className="custom-account-icon" />
          </Link>
          <div className="cart-container" ref={CartPreview}>
            <button onClick={toggleCartPreview} className="cart-button">
              <FontAwesomeIcon icon={faShoppingCart} className="custom-cart-icon" />
            </button>
            {cartVisible && <CartPreview />}
          </div>
          {/* Integrate CartPreview component here */}
        </div>
      </header>
      <nav className="menu">
        <Link to="/new-in">NEW IN</Link>
        <Link to="/brands">BRANDS</Link>
        <Link to="/Products">SKINCARE</Link>
        <Link to="/gifts-sets">GIFTS & SETS</Link>
        <Link to="/offers">OFFERS</Link>
      </nav>
    </>
  );
};

export default Header;
