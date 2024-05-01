import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import image from "../assets/Morthicon.jpeg";
import "./LoginPage.css";

const Auth = ({ setLoggedIn }) => {
  const [authMode, setAuthMode] = useState("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem("login", username);
    setLoggedIn(true);
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );

    // Hard-coded data
    const validUsername = "admin";
    const validPassword = "admin@123";

    if (username === validUsername && password === validPassword) {
      navigate("/dashboard");
      console.log("Login successful!");
    } else {
      console.log("Invalid username or password");
    }

    //  try {
    //    const response = await axios.post("http://192.168.1.184:8084/Morth_app_api/login", {
    //      username,
    //      password,
    //    });

    //    if (response.data.success) {
    //      console.log("Login successful!");
    //      // Add your logic here to handle successful login
    //    }

    //  } catch (error) {
    //    console.error("Error:", error);
    //  }
  };

  if (authMode === "signin") {
    return (
      <div className="Auths-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <img src={image} alt="" width="50" height="50" />
            <p className="Auth-form-title">
              Central Dashboard <br /> Tracking Process of State Wise Tracking
              Platform for Safety <br /> Enforcement of AIS 140 Specification
            </p>
            {/* <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div> */}
            <div className="formss-group mt-3">
              <label>USERNAME</label>
              <br />
              <input
                type="username"
                className="inputtype"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br />

            <div className="formss-group1 mt-3">
              <label>PASSWORD</label>
              <br />
              <input
                type="password"
                className="inputtype"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="signin">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
