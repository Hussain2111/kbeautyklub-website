import React from 'react';
import Slider from 'react-slick';
import './stock2.jpg'; // Import your image for the product
import './Home.css'; // Import your CSS file for styling
import ProductCard from '../../components/ProductCard/ProductCard'; // Import the ProductCard component

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", right: "-30px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", left: "-30px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const Home = () => {
  const stock2 = require('./stock2.jpg'); // Adjust path if needed

  const products = [
    { id: 1, name: "Product 1", price: "$10", image: stock2 },
    { id: 2, name: "Product 2", price: "$20", image: stock2 },
    { id: 3, name: "Product 3", price: "$30", image: stock2 },
    { id: 4, name: "Product 4", price: "$40", image: stock2 },
    { id: 5, name: "Product 5", price: "$50", image: stock2 },
    { id: 6, name: "Product 6", price: "$60", image: stock2 },
    { id: 7, name: "Product 7", price: "$70", image: stock2 },
    { id: 8, name: "Product 8", price: "$80", image: stock2 },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust number of cards shown
    slidesToScroll: 3, // Adjust number of cards scrolled at a time
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    centerMode: true,
    centerPadding: '40px',
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <p>Discover amazing products for every occasion.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>

      <div className="button-section">
        <button className="section-button">New Arrivals</button>
        <button className="section-button">Offers</button>
      </div>
    </div>
  );
};

export default Home;
