import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImage from "../assets/login2.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img
          src={logo}
          alt="ALUMNIVERSE Logo"
          className="logo"
        />
      </div>
      <div className="card-container">
        <div className="login-card">
          <h2 className="card-title">LOGIN</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">Username or email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="actions-container">
              <div className="remember-me-container">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="remember-me-checkbox"
                />
                <label htmlFor="remember-me" className="remember-me-label">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <p className="signup-link">
            Dont have an account?{" "}
            <a href="/signup" className="signup">Sign up</a>
          </p>
        </div>

        <div className="image-container">
          <img
            src={loginImage}
            alt="Illustration"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
