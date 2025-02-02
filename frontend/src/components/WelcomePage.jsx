import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-background"></div>
      <div className="welcome-overlay"></div>
      
      <div className="logo-container">
        <img 
          src="/logo.jpg" 
          alt="Restaurant Logo" 
          className="logo circle-logo" 
        />
      </div>
      
      <div className="welcome-content fade-in">
        <h1 className="welcome-title">Welcome to Our Restaurant</h1>
        <p className="welcome-subtitle">
          Experience exceptional dining with our carefully crafted menu and warm ambiance
        </p>
        
        <div className="button-container">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>
        
        <Link to="/home" className="guest-link">
          Continue as Guest
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;