// File: Filter.jsx
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

const Filter = ({ brands, categories, onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
    onFilterChange({ brands: updatedBrands, categories: selectedCategories, discount: selectedDiscount, priceRange });
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilterChange({ brands: selectedBrands, categories: updatedCategories, discount: selectedDiscount, priceRange });
  };

  const handleDiscountChange = () => {
    const updatedDiscount = !selectedDiscount;
    setSelectedDiscount(updatedDiscount);
    onFilterChange({ brands: selectedBrands, categories: selectedCategories, discount: updatedDiscount, priceRange });
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onFilterChange({ brands: selectedBrands, categories: selectedCategories, discount: selectedDiscount, priceRange: value });
  };

  return (
    <div className="filter">
      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <input className='price-input'
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange([parseInt(e.target.value), priceRange[1]])}
          />
          <span>-</span>
          <input className='price-input'
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>
        <Slider className='price-slider'
        size="large"
          min={0}
          max={100}
          value={priceRange}
          onChange={handlePriceChange}
          range // Enable range selection
        />
      </div>

      <div className="filter-section">
        <h3>Brands</h3>
        {brands.map(brand => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3>Categories</h3>
        {categories.map(category => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3>Discount</h3>
        <label>
          <input
            type="checkbox"
            checked={selectedDiscount}
            onChange={handleDiscountChange}
          />
          Discounted Products
        </label>
      </div>
    </div>
  );
};

export default Filter;
