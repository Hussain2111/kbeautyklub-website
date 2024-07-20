import React from 'react';
import './FilterBar.css';

const FilterBar = ({ onSortChange, onGridStyleChange }) => {
  return (
    <div className="filter-bar">
      <div className="results">
        <span>Showing 902 results for "Korean Skincare"</span>
      </div>
      <div className="filters">
        {/* Featured dropdown */}
        <select className="filter-dropdown" onChange={(e) => onSortChange(e)}>
          <option value="Featured">Featured</option>
          <option value="Rating">Rating</option>
          <option value="Best selling">Best selling</option>
          <option value="Price: High-low">Price: High-low</option>
          <option value="Price: Low-High">Price: Low-High</option>
        </select>
      </div>
      <div className="view-options">
        {/* View options buttons */}
        <button onClick={() => onGridStyleChange('grid')} className="view-button grid-view"></button>
        <button onClick={() => onGridStyleChange('list')} className="view-button list-view"></button>
      </div>
    </div>
  );
};

export default FilterBar;
