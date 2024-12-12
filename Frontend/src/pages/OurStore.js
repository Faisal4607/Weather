import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlilce";
import { Link } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4); // Controls grid layout
  const productState = useSelector((state) => state?.product?.product);
  const [categories, setCategories] = useState([]); // Categories fetched from backend

  // Filter states
  const [category, setCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  const dispatch = useDispatch();

  // Fetch products when filters or sorting are applied
  useEffect(() => {
    getProducts();
  }, [sort, category, minPrice, maxPrice]);

  const getProducts = () => {
    dispatch(
      getAllProducts({
        sort,
        category,
        minPrice,
        maxPrice,
      })
    );
  };

  // Fetch categories from the backend
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch("/api/category"); // Ensure this matches your backend route
    const data = await response.json();
    if (data) setCategories(data);
  };

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          {/* Chatbot Component */}
          <div className="col-12 mb-4">
            <div className="chatbot-container bg-gradient-to-br from-gray-300 to-blue-300 shadow p-6 rounded-lg w-50">
              <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-800 to-green-700 text-transparent bg-clip-text">
                Chatbot
              </h1>
              <div className="flex space-x-4">
                <input
                  type="text"
                  id="chat-input"
                  placeholder="Ask a question..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button
                  id="send-chat"
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                >
                  Send
                </button>
              </div>
              <div
                className="chatbot-output mt-4 p-4 border bg-white border-gray-300 rounded-lg"
                id="chatResponse"
              >
                {/* Chatbot answers will appear here */}
              </div>
            </div>
          </div>

          {/* Filter Sidebar */}
          <div className="col-3">
            {/* Category Filter */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <ul className="ps-0">
                <li
                  className="ps-0"
                  style={{ cursor: "pointer", color: "var(--color-777777)" }}
                  onClick={() => setCategory(null)} // Reset category filter
                >
                  All
                </li>
                {categories?.map((cat, index) => (
                  <li
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => setCategory(cat._id)} // Filter by category ID
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <h5 className="sub-title">Price</h5>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInputMin"
                    placeholder="From"
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInputMin">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInputMax"
                    placeholder="To"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInputMax">To</label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-9">
            {/* Sorting and Grid Layout */}
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name="sort"
                    className="form-control form-select"
                    defaultValue="createdAt"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="name">Name: A to Z</option>
                    <option value="-name">Name: Z to A</option>
                    <option value="price">Price: Low to High</option>
                    <option value="-price">Price: High to Low</option>
                    <option value="createdAt">Newest</option>
                    <option value="-createdAt">Oldest</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">
                    {productState?.length} Products
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Products List */}
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard data={productState || []} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
