import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (

    <div className="lpage">

    <div className="auth-container">
      <div className={`form-container ${isLogin ? "login" : "signup"}`}>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
      <div className="toggle-container">
        <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
        <button onClick={handleToggle}>
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </div>
    </div>
    </div>

  );
};

const LoginForm = () => {
  return (
    <form className="form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

const SignupForm = () => {
  return (
    <form className="form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Login;