import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import stock2 from './stock2.jpg';
import stock1 from './stock-1.jpg';
import { useState } from 'react';
import { FaGift, FaTruck, FaMedal } from 'react-icons/fa'; // Import icons
import stock3 from './stock3.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
};

const Home = () => {

  const [activeButton, setActiveButton] = useState('newArrivals');

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

  return (
    <div className="home">
      <div className="hero-section" style={{ backgroundImage: `url(${stock1})` }}>
        <div className="hero-content">
          <h1>Welcome to KBeauty Klub</h1>
          <p>Discover the best in Korean beauty products</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>

      <div className="product-filter-buttons">
        <button 
          className={`filter-button ${activeButton === 'newArrivals' ? 'active' : ''}`}
          onClick={() => setActiveButton('newArrivals')}
        >
          New Arrivals
        </button>
        <button 
          className={`filter-button ${activeButton === 'bestSellers' ? 'active' : ''}`}
          onClick={() => setActiveButton('bestSellers')}
        >
          Best Sellers
        </button>
      </div>

      {/* <div className="product-section">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-0-px"
          arrows={true}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div> */}

      {/* Add the new placeholder section */}
      <div className="placeholder-section">
        <div className="placeholder-content">
          <h2>Discover Our Latest Collection</h2>
          <p>Explore our curated selection of premium K-beauty products, hand-picked to elevate your skincare routine. From innovative formulations to time-tested favorites, we bring you the best of Korean beauty.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="placeholder-image">
          <img src={"https://imageplaceholder.net/600x400"} alt="Latest Collection" />
        </div>
      </div>

      <div className="skin-type-section">
  <h2>Shop By Skin Type</h2>
  <div className="skin-type-container">
    <div className="skin-type-item">
      <div className="skin-type-label"></div>
      <h3>OILY SKIN</h3>
    </div>
    <div className="skin-type-item">
      <h3>COMBINATION SKIN</h3>
    </div>
    <div className="skin-type-item">
      <h3>DRY SKIN</h3>
    </div>
    <div className="skin-type-item">
      <h3>BALANCED SKIN</h3>
    </div>
  </div>
</div>

    {/* Add the new Features section */}
    <div className="features-section">
        <div className="feature">
          <FaGift className="feature-icon" />
          <h3>Free Samples</h3>
          <p>Get FREE complimentary Samples with every online order to discover your next K-Beauty favourite</p>
        </div>
        <div className="feature">
          <FaTruck className="feature-icon" />
          <h3>2-3 Day UK Delivery</h3>
          <p>No more waiting! we are based in London, so after dispatch, you get your goodies in 2-3 days (UK addresses)</p>
        </div>
        <div className="feature">
          <FaMedal className="feature-icon" />
          <h3>No.1 K-Beauty Shop</h3>
          <p>We are UK's favourite rated Korean beauty store with 6,000+ 5-star reviews, and offline stores</p>
        </div>
      </div>

    </div>
  );
};

export default Home;