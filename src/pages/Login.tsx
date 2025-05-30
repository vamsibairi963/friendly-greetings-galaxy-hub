
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login-container">
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form className="form">
            <h1 className="form-title">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="form-span">or use your email for registration</span>
            <div className="input-group">
              <input type="text" placeholder="Name" className="form-input" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" className="form-input" />
            </div>
            <button type="button" className="form-button">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form className="form">
            <h1 className="form-title">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="form-span">or use your account</span>
            <div className="input-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" className="form-input" />
            </div>
            <a href="#" className="forgot-password">Forgot your password?</a>
            <button type="button" className="form-button">Sign In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="overlay-title">Welcome Back!</h1>
              <p className="overlay-text">To keep connected with us please login with your personal info</p>
              <button 
                className="ghost-button" 
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="overlay-title">Hello, Friend!</h1>
              <p className="overlay-text">Enter your personal details and start your journey with us</p>
              <button 
                className="ghost-button" 
                onClick={() => setIsSignUp(true)}
              >
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
