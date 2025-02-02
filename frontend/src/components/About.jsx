// src/components/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section 
      className="about-section" 
      id="about"
      style={{
        backgroundImage: `url('/2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      {/* Add an overlay div to ensure text remains readable */}
      <div className="background-overlay"></div>
      
      <div className="about-container">
        <div className="about-content fade-in">
          <div className="about-text-content">
            <div className="about-header">
              <h1 className="about-title">ABOUT US</h1>
              <p className="about-subtitle">Where Passion Meets Flavor</p>
            </div>
            
            <div className="about-description">
              <p>
                At Foodio, we bring a world of flavor to your plate, inspired by 
                the rich culinary heritage and vibrant traditions of global cuisine. 
                Our journey is driven by a passion for bold tastes, innovative 
                techniques, and a commitment to excellence.
              </p>
              <p>
                Each dish is thoughtfully crafted to offer a perfect blend of 
                tradition and creativity, ensuring a memorable dining experience 
                that delights the senses. Beyond serving exceptional food, Foodio 
                is dedicated to fostering a culture of sustainability, 
                responsibility, and community, making every meal not just 
                delicious but meaningful.
              </p>
            </div>
            
            <Link to="/" className="about-cta">
              <span>Explore Menu</span>
              <HiOutlineArrowNarrowRight className="arrow-icon" />
            </Link>
          </div>
          
          <div className="about-image-container">
            <img src="/about.png" alt="Culinary excellence" className="about-image" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;