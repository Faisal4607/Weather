import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlilce";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ grid, data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const [wishlist, setWishlist] = useState(wishlistState || []);

  useEffect(() => {
    setWishlist(wishlistState || []);
  }, [wishlistState]);

  const isProductInWishlist = (productId) =>
    wishlist?.some((item) => item._id === productId);

  const addToWish = (productId) => {
    if (isProductInWishlist(productId)) {
      dispatch(addToWishlist(productId));
      setWishlist(wishlist.filter((item) => item._id !== productId));
    } else {
      dispatch(addToWishlist(productId));
      const product = data.find((item) => item._id === productId);
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <>
      {data?.map((item, index) => {
        const isWishlist = isProductInWishlist(item._id);

        return (
          <div
            key={index}
            className={` ${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={() => addToWish(item?._id)}
                >
                  {isWishlist ? (
                    <AiFillHeart className="fs-5 me-1" />
                  ) : (
                    <AiOutlineHeart className="fs-5 me-1" />
                  )}
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images?.[0] || "default_image_url_here"}
                  alt={item?.name || "Product Image"}
                  height={"250px"}
                  width={"100%"}
                  onClick={() => navigate("/product/" + item?._id)}
                />
              </div>
              <div className="product-details">
                <h5 className="product-title">
                  {grid === 12 || grid === 6
                    ? item?.name
                    : item?.name?.substr(0, 80) + "..."}
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.averageRating || 0}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="price">Rs.{item?.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
