import React, { useState } from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import { useApi } from "../../customHooks/CustomHooks";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  let [loginuser, setLoginuser] = useState({
    email: "",
    password: "",
  });

  // returns NavigateFunction, helps to navigate between components programmatically
  let navigate = useNavigate();

  let allSignupusers = useApi("http://localhost:6060/user");
  console.log(allSignupusers);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginuser({ ...loginuser, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginuser);

    // finding authenticated user
    let authUser = allSignupusers.find((ele) => {
      return (
        ele.email === loginuser.email && ele.password === loginuser.password
      );
    });
    console.log(authUser);

    if (authUser) {
      // navigate Profile.jsx
      navigate('/Profile/${authUser.id}');
      navigate("/profile");

      // authuser ID save localStorage
      localStorage.setItem("userid", authUser.id);
      toast.success("login Successfully")
      
    } else {
      // navigate Signup.jsx
      navigate("/");
    }
  };

  return (
    <main id={style.logincontainer}>
      <section>
        <article>
          <h1>Hello, Friend</h1>
          <p>
            Enter your personal details and start <br /> journey with us
          </p>
          <Link to={"/"}>
            <button>SIGN UP</button>
          </Link>
        </article>
        <article>
          <h1>Sign in</h1>
          <div className={style.iconscontainer}>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
          </div>
          <p>or use your account</p>
          <form onSubmit={handleSubmit}>
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={loginuser.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={loginuser.password}
              onChange={handleChange}
            />
            <br />
            <p>Forgot your password?</p>
            <button type="submit">SIGN IN</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
