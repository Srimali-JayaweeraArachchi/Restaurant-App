import React from 'react';
import { motion } from 'framer-motion';
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section 
      className="team-section" 
      id="team"
      style={{
        backgroundImage: `url('/4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="background-overlay"></div>
      
      <div className="team-container">
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="team-title">OUR TEAM</h1>
          <div className="title-underline"></div>
          <p className="team-subtitle">
            Meet the talented individuals behind our success! Our team is dedicated to 
            delivering exceptional experiences and bringing our vision to life with 
            passion and creativity.
          </p>
        </motion.div>

        <div className="team-grid">
          {data[0].team.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
                <div className="member-overlay">
                  <div className="social-links">
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Twitter</a>
                  </div>
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-designation">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;