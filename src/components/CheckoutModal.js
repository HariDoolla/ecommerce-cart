// src/components/CheckoutModal.js
import React from 'react';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Shopping is Completed!</h2>
        <p>Thank you for your purchase. 🎉</p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
