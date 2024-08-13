// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <h1 className="header-title">My E-Commerce Store</h1>
      <div className="cart-icon">
        <Link to="/cart">
          <span role="img" aria-label="cart">🛒</span>
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
