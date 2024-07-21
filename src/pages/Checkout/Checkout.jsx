import React from 'react';
import CartPreview from '../../components/Header/CartPreview';

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h1>kbeauty klub</h1>
        <div className="express-checkout">
          {/* Add express checkout buttons */}
        </div>
      </div>
      <div className="cart-preview-sticky">
      </div>
    </div>
  );
};

export default CheckoutPage;