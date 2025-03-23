import React, { useState } from "react";
import "./login.css";
import "boxicons";
import googleIcon from "../../img/google-icon.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-page">
      <div
        className={`container ${isSignup ? "right-panel-active" : ""}`}
        id="container"
      >
        {/* Sign Up Form */}
        <div className="form-containerr sign-up-container">
          <form action="#">
            <div className="xxxup">
              <h1>Create Account</h1>
              <div className="signup-buttons">
                <button className="google-signup">
                  <img
                    src={googleIcon}
                    alt="Google icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  Sign Up with Google
                </button>
                <button className="github-signup">
                  <box-icon type="logo" name="github" size="sm"></box-icon>Sign
                  Up with GitHub
                </button>
              </div>
              <span>Or use your email for registration</span>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button id="click">Sign Up</button>
            </div>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-containerr sign-in-container">
          <form action="#">
            <div className="xxxin">
              <h1>Welcome Back!</h1>
              <div className="signup-buttons">
                <button className="google-signup">
                  <img
                    src={googleIcon}
                    alt="Google icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  Sign In with Google
                </button>
                <button className="github-signup">
                  <box-icon type="logo" name="github" size="sm"></box-icon>Sign
                  In with GitHub
                </button>
              </div>
              <h3>Enter the Credentials to Login In.</h3>
              <input type="email" placeholder="Email ID" />
              <input type="password" placeholder="Password" />
              <Link id="forgot" to="#">
                Forgot your password?{" "}
              </Link>
              <button>Sign In</button>
            </div>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>
                <span className="bounce welcome">Welcome</span>{" "}
                <span className="bounce back">Back!</span>
              </h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>
                <span className="bounce hello">Hello,</span>
                <span className="bounce friend">Friend!</span>
              </h1>
              <p>
                Enter your personal details and complete the form to start
                journey with us
              </p>
              <button className="ghost" id="signUp" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
