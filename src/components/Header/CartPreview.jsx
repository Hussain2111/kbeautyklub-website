import React from 'react';
import './Header.css';

const CartPreview = ({ onCheckout }) => {
  return (
    <div className="cart-preview">
      <h3>Cart Preview</h3>
      {/* Add your cart preview content here */}
      <p>Subtotal: $0.00</p>
      <p>Your cart items will be displayed here.</p>
      {onCheckout && (
        <button onClick={onCheckout} className="checkout-button">
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPreview;