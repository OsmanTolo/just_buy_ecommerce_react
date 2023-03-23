import React, {useEffect, useState} from 'react';
import Login from "./pages/Login";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../assets/css/navbar.css";


function NavBar() {
  //Get the live size of the cart from the store and update it when store state changes
  const cartCount = useSelector(state => state.products.length);
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span> 
      </button>
      <a className="logo navbar-brand">JustBuy</a>
      <div
        className="collapse navbar-collapse text-center"
        id="navbarTogglerDemo03"
      >
        <div>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-link"
            }
          >
            
          </NavLink>
        </div>
        <div className="nav-links__middle mx-auto">
          <ul className="navbar-nav  mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/shop"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              to="/checkout"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Checkout
            </NavLink>
          </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-item nav-links__right text-center">
          <ul className="navbar-nav text-center sameLine">
            <li className="nav-item" id="cartIcon">
              <NavLink 
                to="/checkout" 
                end
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <sup>
                  <span className="badge rounded-pill badge-notification bg-danger">
                  {`${cartCount}`}
                  </span>
                </sup>
              </NavLink>
            </li>
            <li className="nav-item dropdown" id="signIn">
              <a
                className="nav-link dropdown-toggle sign-in text-center"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <p>Sign in</p>
              </a>
              <Login></Login>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;