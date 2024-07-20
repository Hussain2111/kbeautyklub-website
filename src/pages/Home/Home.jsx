import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css'; // Import your CSS file for styling
import ProductCard from '../../components/ProductCard/ProductCard'; // Import the ProductCard component
import stock2 from './stock2.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Home = () => {
 // Adjust path if needed

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
      <div className="product-section">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={250}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
