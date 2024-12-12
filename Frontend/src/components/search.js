import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAProduct } from "../features/products/productSlice";
import axios from "axios";

const SearchBar = () => {
  const [productOptions, setProductOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);

    try {
      const { data } = await axios.get(
        `/api/products/search?query=${query}` // Adjust the endpoint based on your API
      );
      setProductOptions(
        data.map((product) => ({
          prod: product._id,
          name: product.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching search results", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (selected) => {
    if (selected && selected.length > 0) {
      navigate(`/product/${selected[0]?.prod}`);
      dispatch(getAProduct(selected[0]?.prod));
    }
  };

  return (
    <div className="col-5">
      <div className="input-group">
        <Typeahead
          id="product-search"
          onInputChange={(query) => handleSearch(query)} // Trigger API call on input change
          onChange={handleSelect} // Handle selection
          options={productOptions} // Set fetched options
          labelKey="name" // Use "name" for the dropdown display
          placeholder="Search for Products here"
          isLoading={loading} // Show loading spinner
        />
        <span className="input-group-text p-3" id="basic-addon2">
          <BsSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
