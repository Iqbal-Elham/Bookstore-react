import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
    const clickedStyle = ({ isActive }) => ({
        color: isActive ? 'black' : '#a19e9e',
      });

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <h1>Bookstore CMS</h1>
          </li>
          <li>
            <NavLink style={clickedStyle} to="/">Books</NavLink>
          </li>
          <li>
            <NavLink style={clickedStyle} to="/categories">Categories</NavLink>
          </li>
        </ul>
        <h1>icon</h1>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
