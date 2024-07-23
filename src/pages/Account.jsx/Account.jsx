import React, { useState } from 'react';
import './Account.css';

const AccountPage = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }
  ]);
  const [newAddress, setNewAddress] = useState({ street: '', city: '', state: '', zip: '' });

  // Mock data for demonstration
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };

  const orderHistory = [
    { id: 1, date: '2023-07-15', total: 150.00, status: 'Delivered' },
    { id: 2, date: '2023-06-30', total: 75.50, status: 'Shipped' },
    { id: 3, date: '2023-06-15', total: 200.00, status: 'Processing' }
  ];

  const handleAddressChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const addNewAddress = () => {
    setAddresses([...addresses, { id: addresses.length + 1, ...newAddress }]);
    setNewAddress({ street: '', city: '', state: '', zip: '' });
  };

  return (
    <div className="account-page">
      <h1>My Account</h1>
      
      <section className="account-details">
        <h2>Account Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </section>

      <section className="address-details">
        <h2>Address Details</h2>
        {addresses.map(address => (
          <div key={address.id} className="address">
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip}</p>
          </div>
        ))}
        <h3>Add New Address</h3>
        <div className="new-address-form">
          <input 
            type="text" 
            name="street" 
            value={newAddress.street} 
            onChange={handleAddressChange} 
            placeholder="Street"
          />
          <input 
            type="text" 
            name="city" 
            value={newAddress.city} 
            onChange={handleAddressChange} 
            placeholder="City"
          />
          <input 
            type="text" 
            name="state" 
            value={newAddress.state} 
            onChange={handleAddressChange} 
            placeholder="State"
          />
          <input 
            type="text" 
            name="zip" 
            value={newAddress.zip} 
            onChange={handleAddressChange} 
            placeholder="ZIP"
          />
          <button onClick={addNewAddress}>Add Address</button>
        </div>
      </section>

      <section className="order-history">
        <h2>Order History</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AccountPage;