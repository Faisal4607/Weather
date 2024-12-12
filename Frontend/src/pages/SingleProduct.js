import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../features/products/productSlilce";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    console.log("Product ID from URL:", getProductId); // Log the product ID
    dispatch(getAProduct(getProductId)); // Dispatch the action to fetch the product
  }, [getProductId]);
  
  console.log("Product Data from Redux:", productState); // Log the product data
    
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, [cartState, getProductId]);

  const uploadCart = () => {
    if (productState.stock <= 0) {
      toast.error("This product is out of stock.");
      return;
    }
    dispatch(
      addProdToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
      })
    );
    navigate("/cart");
  };

  const [popularProduct, setPopularProduct] = useState([]);
  useEffect(() => {
    const popular = productsState.filter(
      (product) => product?.SEOtags?.includes("popular")
    );
    setPopularProduct(popular);
  }, [productsState]);

  const handleToggleWishlist = () => setIsFilled(!isFilled);

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const addRatingToProduct = (star, comment) => {
    if (!star) {
      toast.error("Please add a star rating.");
      return;
    }
    if (!comment) {
      toast.error("Please write a review.");
      return;
    }
    dispatch(addRating({ star, comment, prodId: getProductId }));
    setTimeout(() => {
      dispatch(getAProduct(getProductId));
    }, 100);
  };

  return (
    <>
      <Meta title={productState?.name || "Product Details"} />
      <BreadCrumb title={"Sunderkhani Mewa"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* Product Images */}
          <div className="col-6">
            <div className="main-product-image">
              <img
                src={
                  productState?.images?.[0] ||
                  "https://g-cdn.blinkco.io/ordering-system/55682/dish_image/1732209696.jpg"
                }
                alt={productState?.name}
                className="img-fluid"
              />
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images?.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Product Image ${index}`} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-6">
            <div className="main-product-details">
              <h3 className="title">{productState?.name ||"Sunderkhani Mewa"}</h3>
              <p className="price">Rs. {productState?.price || "1900"}/-</p>
              <div className="d-flex align-items-center gap-10">
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="mb-0 t-review">
                  ({productState?.reviews?.length || 1} Reviews)
                </p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Category:</h3>
                <p className="product-data">{productState?.category || "Raisins"}</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Weight:</h3>
                <p className="product-data">{productState?.weight ||"1000g"}</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Stock:</h3>
                <p className="product-data">
                  {"In Stock"}
                </p>
              </div>
              <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                <h3 className="product-heading">Quantity:</h3>
                <div>
                  <input
                    type="number"
                    min={1}
                    max={productState?.stock || 10}
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <button
                  className="button border-0"
                  type="button"
                  onClick={uploadCart}
                >
                  {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
              <div className="d-flex align-items-center gap-15">
                {isFilled ? (
                  <AiFillHeart className="fs-5" onClick={handleToggleWishlist} />
                ) : (
                  <AiOutlineHeart
                    className="fs-5"
                    onClick={handleToggleWishlist}
                  />
                )}
              </div>
              <div className="d-flex gap-10 flex-column my-3">
                <h3 className="product-heading">Description:</h3>
                <p className="product-data">{"Sweet and chewy raisins, full of flavor."}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Reviews Section */}
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            {productState?.reviews?.map((review, index) => (
              <div key={index} className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6>{review?.user?.name || "Anonymous"}</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    value={review?.rating || 0}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p>{review?.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
