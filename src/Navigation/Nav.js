import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">CarShop</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={query}
                  onChange={handleInputChange}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
          </ul>
          <Link to="/admin" className="nav-link">
            <AiOutlineUserAdd className="nav-icons" />
            <span className="admin-text">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
