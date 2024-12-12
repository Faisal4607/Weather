import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ProductSlider.css";
import { useNavigate } from 'react-router-dom'; 
import { getAProduct } from '../features/products/productSlilce'; 

const ProductSlider = ({ products }) => {

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };


  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };


  return (
    <div className="slider-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#9664;
      </button>

      <div className="slider" ref={sliderRef}>
        {products.map((product) => (
          <div className="slider-item" key={product.id}>
            <Link to={`/product/${product.id}`}>
              {/* Display the first image in the images array, or a fallback image if empty */}
              <img
                src={product.images && product.images[0] ? product.images[0] : "https://via.placeholder.com/150"}
                alt={product.name}
                className="product-image"
                onClick={() => handleProductClick(product.id)} 
                style={{ cursor: 'pointer' }}  
              />
              <p className="product-name">{product.name}</p>
            </Link>
          </div>
        ))}
      </div>

      <button className="scroll-button right" onClick={scrollRight}>
        &#9654;
      </button>
    </div>
  );
};

export default ProductSlider;
