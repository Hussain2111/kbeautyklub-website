import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, company, image, price, details } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-details">{details}</p>
      <p className="company-name">{company}</p>
      <p className="product-price">£{price}</p>
    </div>
  );
};

export default ProductCard;