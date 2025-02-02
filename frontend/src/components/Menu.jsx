import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section 
      className="menu-section" 
      id="menu"
      style={{
        backgroundImage: `url('/5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="background-overlay"></div>
      
      <div className="menu-container">
        <div className="menu-header">
          <h1 className="menu-title">POPULAR DISHES</h1>
          <div className="title-underline"></div>
          <p className="menu-subtitle">
            Discover our most loved dishes, crafted with passion and bursting with flavors. 
            From savory classics to modern delights, these favorites are guaranteed to satisfy every craving!
          </p>
        </div>

        <div className="dishes-grid">
          {data[0].dishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="dish-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="dish-image-container">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="dish-image"
                />
                <div className="dish-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              
              <div className="dish-content">
                <h3 className="dish-title">{dish.title}</h3>
                <span className="dish-category">{dish.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;