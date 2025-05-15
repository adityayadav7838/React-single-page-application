import React, { Fragment } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  let id = localStorage.getItem("userid");
  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("userid");
    navigate("/login");
    toast.success("logout successfull");
  };

  return (
    <nav id={styles.navbar}>
      <h3>Logo</h3>

      <ul>
        {id ? (
          <li className={styles.hamburger}>
            <IoMdMenu />
            <div className={styles.dropdown}>
              <li onClick={logout}>logout</li>
              {/* <li Link to={}></li> */}
              <li>update</li>
              <li>delete</li>
            </div>
          </li>
        ) : (
          <Fragment>
            <li className={styles.loginbtn}>
              <Link to="/login">Login</Link>
            </li>
            <li className={styles.signupbtn}>
              <Link to="/">Signup</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
