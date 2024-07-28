import React, { useState } from 'react';
import './Checkout.css';
import { SiShopify } from 'react-icons/si';
import { FaPaypal } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

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
          <button className="shop-pay"><SiShopify size={16} />      </button>
          <button className="paypal"><FaPaypal size={16} />     PayPal</button>
          <button className="g-pay"><FaGoogle size={16} />    Pay</button>
        </div>
        <div className="divider">OR</div>
        <form>
          <h3>Delivery</h3>
          <label>Country/Region</label>
            <select className="select" name="country" value={formData.country} onChange={handleChange}>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          <div className="form-group">
            <div className="half">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First name" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last name" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
            </div>
            <input type="text" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <div className="half">
            <input 
              type="text" 
              name="postcode" 
              placeholder="Postcode" 
              value={formData.postcode} 
              onChange={handleChange} 
            />
            <input 
            type="tel" 
            name="phone" 
            placeholder="Phone (optional)" 
            value={formData.phone} 
            onChange={handleChange} />
            </div>
            </div>
        </form>
        <form>
          <h3>Payment</h3>
          <div className="form-group">
            <input className="text-field" type="text" name="cardNumber" placeholder="Card number" value={formData.cardNumber} onChange={handleChange} />
            <input className="text-field" type="text" name="cardName" placeholder="Name on card" value={formData.cardName} onChange={handleChange} />
            <div className="half">
            <input 
              type="text" 
              name="expiryDate" 
              placeholder="Expiry date (MM/YY)" 
              value={formData.expiryDate} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="cvc" 
              placeholder="CVC" 
              value={formData.cvc} 
              onChange={handleChange} 
            />
            </div>
          </div>
          <input
            type="checkbox"
            name="sameAddress"
            checked={formData.sameAddress}
            onChange={handleChange}
            id="sameAddress"
          />
          <label htmlFor="sameAddress">Billing address same as shipping address</label>
          {!formData.sameAddress && (
          <>
          <h3>Billing Address</h3>
          <label>Country/Region</label>
            <select className="select" name="country" value={formData.country} onChange={handleChange}>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          <div className="form-group">
            <div className="half">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First name" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last name" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
            </div>
            <input type="text" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <div className="half">
            <input 
              type="text" 
              name="postcode" 
              placeholder="Postcode" 
              value={formData.postcode} 
              onChange={handleChange} 
            />
            <input 
            type="tel" 
            name="phone" 
            placeholder="Phone (optional)" 
            value={formData.phone} 
            onChange={handleChange} />
            </div>
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