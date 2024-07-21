import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import stock2 from './stock2.jpg';

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
      {/* ... (hero section and button section remain unchanged) ... */}

      <div className="product-section">
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
      </div>
    </div>
  );
};

export default Home;