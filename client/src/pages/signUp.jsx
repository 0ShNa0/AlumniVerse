import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import signImage from "../assets/signUp.png"
import logo from "../assets/logo.png";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
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
          <div className="card-title">SIGN UP</div>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm_password" className="input-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                placeholder="********"
                className="input-field"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="login-button"
            >
              Register Account
            </button>
          </form>

          <p className="signup-link">
            Already have an account?{" "}
            <a href="/login" className="signup">Login</a>
            .
          </p>
        </div>

        <div className="image-container">
          <img
            src={signImage}
            alt="Illustration"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
