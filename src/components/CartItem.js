import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { id, name, quantity, price } = item;

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    onQuantityChange(id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">${price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button 
            className="quantity-button" 
            onClick={() => onQuantityChange(id, quantity - 1)} 
            disabled={quantity <= 1}
          >
            -
          </button>
          <input 
            type="number" 
            value={quantity} 
            onChange={handleQuantityChange} 
            className="quantity-input"
          />
          <button 
            className="quantity-button" 
            onClick={() => onQuantityChange(id, quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button 
        className="remove-button" 
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
