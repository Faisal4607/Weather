import React, { useState, useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product");
        console.log("API Response:", response.data); // Log the response
        setProducts(response.data); // Assuming response.data is an array
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err); // Log the error details
        setError("Failed to load products.");
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Shop by Category</h2>
      <ProductSlider products={products} />

      <h2>Popular Products</h2>
      <ProductSlider products={products} />

      <h2>Seasonal Picks</h2>
      <ProductSlider products={products} />
    </div>
  );
};

export default HomePage;
