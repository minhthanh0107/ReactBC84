import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { useSelector } from "react-redux";

const HeaderHome = () => {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.product);

  const handleRedirectShoppingCart = () => {
    navigate("/redux-shopping-cart");
  };
  //bs5-navbar-background
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <NavLink className="navbar-brand" to="/">
        CyberSoft
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              to="/"
              aria-current="page"
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              to="/antd"
            >
              Antd
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              to="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              React Router Dom
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink
                className="dropdown-item"
                to="/react-router-dom/demo-use-navigate"
              >
                Demo use navigate
              </NavLink>
              <NavLink
                className="dropdown-item"
                to="/react-router-dom/use-search-param"
              >
                Demo use search param
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="redux-change-number">
                Demo change number
              </NavLink>
              <NavLink className="dropdown-item" to="redux-products">
                Demo products
              </NavLink>
              <NavLink className="dropdown-item" to="redux-shopping-cart">
                Demo shopping cart
              </NavLink>
              <NavLink className="dropdown-item" to="booking-ticket">
                Demo Booking Ticket
              </NavLink>
              <NavLink className="dropdown-item" to="redux-thunk-demo">
                Redux thunk demo
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hook tối ưu
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="demo-use-memo">
                Demo use memo
              </NavLink>
              <NavLink className="dropdown-item" to="demo-use-callback">
                Demo use callback
              </NavLink>
              <NavLink className="dropdown-item" to="demo-use-ref">
                Demo use ref
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Custom hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="demo-custom-hook">
                Custom hook fetch data
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="d-flex items-center gap-3">
          <div
            className="d-flex items-center justify-center"
            style={{ cursor: "pointer" }}
          >
            <Badge
              count={carts.length}
              showZero
              onClick={handleRedirectShoppingCart}
            >
              <Avatar shape="circle" size={"small"} />
              {/* <ShoppingCartOutlined className="text-white" /> */}
            </Badge>
          </div>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
