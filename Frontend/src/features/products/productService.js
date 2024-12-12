import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`/api/product/${id}?ts=${Date.now()}`);
    return response.data; // Ensure you return JSON data
  } catch (error) {
    console.error("Error fetching product:", error.response || error);
    // Handle error response gracefully
    return null;
  }
};


const getProducts = async (data) => {
  console.log(data);
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `tags=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );

  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`${base_url}product/${id}`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};


const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/Wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productSevice = {
  getProducts,
  addToWishlist,
  getSingleProduct,
  rateProduct,
};
