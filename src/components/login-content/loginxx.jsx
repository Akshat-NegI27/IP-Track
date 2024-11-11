import React from 'react';
import './login.css';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='Login-page'>
        <div className="container">
            <div className="image-login">
                <img src="https://images.pexels.com/photos/25402129/pexels-photo-25402129/free-photo-of-studio-shot-of-a-man-in-a-suit-and-a-mask-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>

    <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username"></input>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password"></input>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <div className="remember-forget">
                <label ><input type="checkbox" ></input>
                Remember me</label>
                <a href="#"> Forgot Password?</a>
            </div>
            <button type="submit" class="btn">Log in</button>
            <div className="register-link">
                <p>Don't have a account? <Link to="/register">Register</Link> <a href="#">Register</a></p>
            </div>
        </form>
    </div>

    </div>
    </div>

  );
};

export default Login;
