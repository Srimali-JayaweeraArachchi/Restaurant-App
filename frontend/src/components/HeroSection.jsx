import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-banner fade-in">
          <div className="hero-content-left">
            <h1 className="hero-title">
              Welcome to
              <span className="highlight-text">Foodio</span>
            </h1>
            <div className="hero-image-wrapper">
              <img src="./hero1.png" alt="Delicious dish" className="hero-image circle-image"/>
            </div>
          </div>
          
          <div className="hero-content-right">
            <div className="text-logo-wrapper">
              <div className="text-design">
                <h2 className="dishes-title">Savor the Flavor</h2>
              </div>
              <img src="/logo.svg" alt="Restaurant logo" className="brand-logo"/>
            </div>
            
            <div className="secondary-image-wrapper">
              <img src="hero2.png" alt="Featured dish" className="secondary-image circle-image"/>
            </div>
            <div className="additional-image-wrapper">
              <img src="hero3.png" alt="Special dish" className="additional-image circle-image"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;