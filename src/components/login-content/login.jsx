import React, { useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className='login-page'>
    <div className={`container ${isSignup ? 'right-panel-active' : ''}`} id="container">
        {/* Sign Up Form */}
      <div className="form-containerr sign-up-container">
        <form action="#">
        <div className="xxx">
          <h1>Create Account</h1>
          <div className="social-container">
            <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
            <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          </div>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-containerr sign-in-container">
        <form action="#">
            <div className="xxx">
          <h1>Welcome Back!</h1>
          <div className="social-container">
          <Link id='icon' to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
          <Link id='icon' to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
          <Link id='icon' to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
          </div>
          <h3>Email</h3>
          <input type="email" placeholder="Email" />
          <h3>Password</h3>
          <input type="password" placeholder="Passwordd" />
          <br />
          <Link id="forgot" to="#">Forgot your password?  </Link>
          <br />
          <button>Sign In</button>
          </div>
        </form>
      </div>

        {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;