import React from 'react';
import './ProductCard.css'; // Import corresponding CSS for styling

const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
