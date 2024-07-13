import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  const [products, setProducts] = useState([]);

  // Example: Fetch products from API based on searchQuery
  useEffect(() => {
    // Fetch products based on searchQuery
    // Example:
    // fetch(`api/products?search=${searchQuery}`)
    //   .then(response => response.json())
    //   .then(data => setProducts(data));
    
    // Simulated data for demonstration
    const simulatedProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ];

    setProducts(simulatedProducts);
  }, [searchQuery]);

  return (
    <div className="products">
      <h2>Products</h2>
      {searchQuery && <p>Searching for: {searchQuery}</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
