import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../restApi.json';

const WhoAreWe = () => {
  return (
    <section 
      className="whoarewe-section" 
      id="who_are_we"
      style={{
        backgroundImage: `url('/whoweare.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="background-overlay"></div>
      
      <div className="whoarewe-container">
        {/* Upper Stats */}
        <div className="stats-banner upper-stats">
          {data[0].who_we_are.slice(0, 2).map(element => (
            <motion.div
              key={element.id}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="stat-number">{element.number}</h1>
              <div className="stat-divider"></div>
              <p className="stat-title">{element.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div 
          className="central-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="image-wrapper">
            <img className="gradient-background" src="center.svg" alt="gradientBg" />
            <img 
              className="main-image circle-image" 
              alt="food" 
              src="logo.jpg" 
              style={{
                borderRadius: '50%', // Make the image circular
                width: '500px', // Set a fixed width
                height: '500px', // Set a fixed height
                objectFit: 'cover', // Ensure the image fits within the circle
                border: '3px solid white', // Optional: Add a border
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Optional: Add a shadow
              }}
            />
          </div>
        </motion.div>

        {/* Lower Stats */}
        <div className="stats-banner lower-stats">
          {data[0].who_we_are.slice(2).map(element => (
            <motion.div
              key={element.id}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="stat-number">{element.number}</h1>
              <div className="stat-divider"></div>
              <p className="stat-title">{element.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;