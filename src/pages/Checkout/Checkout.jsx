import React, { useState } from 'react';
import './Checkout.css';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    country: 'United Kingdom',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    postcode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
    sameAddress: true
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Express checkout</h2>
        <div className="express-checkout">
          <button className="shop-pay">Shop Pay</button>
          <button className="paypal">PayPal</button>
          <button className="g-pay">G Pay</button>
        </div>
        <div className="divider">OR</div>
        <form>
          <h3>Delivery</h3>
          <div className="form-group">
            <label>Country/Region</label>
          </div>
          <div className="form-group">
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>
          <div className="form-group name-group">
            <input 
              className="text-field-half"
              type="text" 
              name="firstName" 
              placeholder="First name" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <input 
            className="text-field-half"
              type="text" 
              name="lastName" 
              placeholder="Last name" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
            <input className="text-field" type="text" name="postcode" placeholder="Postcode" value={formData.postcode} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="tel" name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} />
          </div>
        </form>

        <form>
          <h3>Payment</h3>
          <div className="form-group">
            <input className="text-field" type="text" name="cardNumber" placeholder="Card number" value={formData.cardNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="cardName" placeholder="Name on card" value={formData.cardName} onChange={handleChange} />
          </div>
          <div className="form-group name-group">
            <input 
              className="text-field-half"
              type="text" 
              name="expiryDate" 
              placeholder="Expiry date (MM/YY)" 
              value={formData.expiryDate} 
              onChange={handleChange} 
            />
            <input 
            className="text-field-half"
              type="text" 
              name="cvc" 
              placeholder="CVC" 
              value={formData.cvc} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={handleChange}
              id="sameAddress"
            />
            <label htmlFor="sameAddress">Billing address same as shipping address</label>
          </div>
          {!formData.sameAddress && (
            <>
              <h3>Billing Address</h3>
              <div className="form-group">
          <label>Country/Region</label>
          </div>
              <div className="form-group">
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>
          <div className="form-group name-group">
            <input 
            className="text-field-half"
              type="text" 
              name="firstName" 
              placeholder="First name" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <input 
              className="text-field-half"
              type="text" 
              name="lastName" 
              placeholder="Last name" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input  className="text-field" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
            <input className="text-field" type="text" name="postcode" placeholder="Postcode" value={formData.postcode} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input className="text-field" type="tel" name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} />
          </div>
            </>
          )}
        </form>
      </div>
      <div className="cart-preview-sticky">
        <h3>Order Summary</h3>
        {/* Add cart items here */}
        <div className="cart-item">
          <img src="path_to_product_image" alt="Product" />
          <div>
            <p>Salmon Caring Centella Cream (100ml)</p>
            <p>£25.90</p>
          </div>
        </div>
        <div className="discount-code">
          <input type="text" placeholder="Discount code or gift card" />
          <button>Apply</button>
        </div>
        <div className="order-total">
          <p>Subtotal</p>
          <p>£25.90</p>
        </div>
        <div className="shipping">
          <p>Shipping</p>
          <p>Enter shipping address</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>GBP £25.90</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;