import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 mb-0">
              <p className="text-white">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6 text-white">
              <p className="text-end">
                Hotline:{" "}
                <a className="text-white" href="tel: +84 978172115">
                  +84 978172115
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev HUCE</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Tìm kiếm sản phẩm..."
                  aria-label="Tìm kiếm sản phẩm..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare"></img>
                    <p>Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/wishlist.svg" alt="wishlist"></img>
                    <p>Favorite <br/> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/user.svg" alt="user"></img>
                    <p>Login <br/> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/cart.svg" alt="cart"></img>
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
