// imrc
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "font-awesome/css/font-awesome.css";
import "./navBar.css"

// cc
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand"
        style={{ backgroundColor: "#fff" }}
      >
        <Link className="navbar-brand" to="/">
          Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </li>
          </ul>
          <div className="">
            <Link
              className="btn btn-outline-info cart-button"
              to="/cart">
                <i className="fa fa-shopping-cart cart-icon"></i>
              Cart 
              <span className="badge badge-success counter">12</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

// Advanced ES6 Topics
// Arrow function,
/// object destructuring,
// spread operator,
// array methods ( filter, map, sort)
