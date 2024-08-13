// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';  // Importing the CartContext
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import './CartPage.css';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);  // Using the CartContext

  return (
    <div className="cart-page">
      <CartSummary />
    </div>
  );
};

export default CartPage;
