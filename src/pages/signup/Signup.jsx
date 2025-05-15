import React, { useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";
const Signup = () => {
  let [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupUser);

    try {
      let response = await axios.post(
        "http://localhost:6060/user",
        signupUser
      );
      console.log(response);
      toast.success("SignUp successfully")
      
      Navigate("/login");
    } catch (error) {
      console.log("error while posting the signupuser");
    }

    // clearing input fields
    setSignupUser({username:"",email:"",password:""})
  };

  return (
    <main id={style.signupcontainer}>
      <section>
        <article>
          <h1>Welcome Back!</h1>
          <p>
            To keep connected with us please login <br /> with your personal
            info
          </p>
          <Link to={"/login"}><button>SIGN IN</button></Link>
        </article>
        <article>
          <h1>Create Account</h1>
          <div className={style.iconscontainer}>
            <span>❤️</span>
            <span>❤️</span>
            <span>❤️</span>
          </div>
          <p>or use your email for registration</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={signupUser.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={signupUser.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={signupUser.password}
              onChange={handleChange}
            />
            <br />
            <button type="submit">SIGN UP</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Signup;
