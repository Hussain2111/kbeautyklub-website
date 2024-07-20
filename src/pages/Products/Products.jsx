import React, { useState } from 'react';
import Filter from '../../components/Filter/Filter'; // Import Filter component
import FilterBar from '../../components/Filter/FilterBar';
import ProductCard from '../../components/ProductCard/ProductCard'; // Import ProductCard component
import './Products.css';

const Products = () => {
  // Static simulated product data for demonstration
  const simulatedProducts = [
    { id: 1, name: 'Product 1', brand: 'Brand A', category: 'Category X', price: 100, discount: true, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', brand: 'Brand B', category: 'Category Y', price: 200, discount: false, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', brand: 'Brand A', category: 'Category X', price: 300, discount: true, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 1', brand: 'Brand A', category: 'Category X', price: 100, discount: true, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 2', brand: 'Brand B', category: 'Category Y', price: 200, discount: false, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 3', brand: 'Brand A', category: 'Category X', price: 300, discount: true, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 2', brand: 'Brand B', category: 'Category Y', price: 200, discount: false, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 3', brand: 'Brand A', category: 'Category X', price: 300, discount: true, image: 'https://via.placeholder.com/150' },
  ];

  const [gridStyle, setGridStyle] = useState('grid'); // Initial grid style
  const [sortOption, setSortOption] = useState('featured'); // Initial sort option

  return (
    <div className="products-page">
      <FilterBar />
      <Filter
        brands={['Brand A', 'Brand B']}
        categories={['Category X', 'Category Y']}
        onFilterChange={() => {}} // Dummy function for now
      />
      <div className="products">
        <div className="product-grid">
          {simulatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
