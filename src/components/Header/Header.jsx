import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import searchIcon from '../../assets/magnifying-glass.svg';
import CartPreview from './CartPreview';
import { useNavigate } from 'react-router-dom';
import AccountPage from '../../pages/Account.jsx/Account';

const Header = () => {
  const [query, setQuery] = useState('');
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const cartRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      // Navigate to products page with search query
      setQuery('');
    }
  };

  const handleAccountClick = () => {
    navigate('/account');
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    setCartVisible(false);
  };

  const toggleCartPreview = () => {
    setCartVisible(!cartVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      // Replace this with your actual login check logic
      const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(userLoggedIn);
    };

    checkLoginStatus();
    // Add event listener for login status changes
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

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
        <button onClick={handleAccountClick} className="account-button">
            <FontAwesomeIcon icon={faUser} className="custom-account-icon" />
          </button>
          <div className="cart-container" ref={cartRef}>
            <button onClick={toggleCartPreview} className="cart-button">
              <FontAwesomeIcon icon={faShoppingCart} className="custom-cart-icon" />
            </button>
            {cartVisible && <CartPreview onCheckout={handleCheckout}/>}
          </div>
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