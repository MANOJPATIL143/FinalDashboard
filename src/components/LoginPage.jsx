import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/Morthicon.jpeg";
import "./LoginPage.css";


const Auth = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleLogin = (e) => {
    e.preventDefault();
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
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
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
            <div className="form-group mt-3">
              <label>USERNAME</label>
              <br />
              <input
                type="username"
                className="form-control mt-1"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br />

            <div className="form-group1 mt-3">
              <label>PASSWORD</label>
              <br />
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" class="btn btn-danger">
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