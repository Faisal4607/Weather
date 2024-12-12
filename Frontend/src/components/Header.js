import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/products/productSlilce";
import { getUserCart } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [total, setTotal] = useState(null);
  const [paginate, setPaginate] = useState(true);
  const productState = useSelector((state) => state?.product?.product);
  const navigate = useNavigate();

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  const [productOpt, setProductOpt] = useState([]);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* Top banner */}
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <marquee className="text-white mb-0">
                Free Shipping Over Rs. 5000
              </marquee>
            </div>
          </div>
        </div>
      </header>

      {/* Logo, brand name, and navigation */}
      <header className="header-upper py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6 d-flex align-items-center">
              <img src={logo} alt="AJWA" style={{ width: "55px", height: "50px" }} />
              <h1 className="text-white ms-3 mb-0">Ajwa Dry Fruit</h1>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end align-items-center gap-15">
                <NavLink to="/" style={{ color: 'white', fontSize: '18px' }}>Home</NavLink>
                <NavLink to="/product" style={{ color: 'white', fontSize: '18px' }}>Our Store</NavLink>
                <NavLink to="/chatbot" style={{ color: 'white', fontSize: '18px' }}>Chatbot</NavLink>
                <NavLink to="/my-orders" style={{ color: 'white', fontSize: '18px' }}>My Orders</NavLink>
                <NavLink to="/about" style={{ color: 'white', fontSize: '18px' }}>About Us</NavLink>
                <NavLink to="/contact" style={{ color: 'white', fontSize: '18px' }}>Contact</NavLink>
                {authState?.user !== null ? (
                  <button
                    className="border border-0 bg-transparent text-white text-uppercase"
                    type="button"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category, search bar, and user actions */}
      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={menu} alt="" />
                  <span className="me-1 d-inline-block">Shop Categories</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {productState &&
                    productState.map((item, index) => (
                      <li key={index}>
                        <Link className="dropdown-item text-white" to="">
                          {item?.category}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search for Products here"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end gap-15">
              <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                <img src={wishlist} alt="wishlist" />
                <p className="mb-0">Wishlist</p>
              </Link>
              <Link
                to={authState?.user === null ? "/login" : "my-profile"}
                className="d-flex align-items-center gap-10 text-white"
              >
                <img src={user} alt="user" />
                <p className="mb-0">My Account</p>
              </Link>
              <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                <img src={cart} alt="cart" />
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">
                    {cartState?.length ? cartState?.length : 0}
                  </span>
                  <p className="mb-0">
                    Rs. {!cartState?.length ? 0 : total ? total : 0}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
