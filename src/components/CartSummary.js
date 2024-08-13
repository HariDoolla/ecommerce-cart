// src/components/CartSummary.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';
import './CartSummary.css';

const CartSummary = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discount = 0; // Example: Set a discount if needed
    return (subtotal - discount).toFixed(2);
  };

  const handleQuantityChange = (id, change) => {
    updateQuantity(id, change);
  };

  const handleCheckout = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <p className="item-total-cost">
                Total Cost: ${ (item.price * item.quantity).toFixed(2) }
              </p>
              <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${calculateSubtotal()}</span>
        </div>
        <div className="summary-item">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      <CheckoutModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default CartSummary;
