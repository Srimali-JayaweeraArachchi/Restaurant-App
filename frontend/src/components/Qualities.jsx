import React from 'react';

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "./quality_food.svg",
      title: "QUALITY FOOD",
      description: "We source only the finest ingredients, ensuring each dish meets our exceptional standards of freshness and taste.",
      cardClass: "quality-card quality-food"
    },
    {
      id: 2,
      image: "./super_taste.svg",
      title: "SUPER TASTE",
      description: "Our expert chefs craft unique flavor combinations that create unforgettable culinary experiences.",
      cardClass: "quality-card super-taste"
    },
    {
      id: 3,
      image: "./fast_delivery.svg",
      title: "FAST DELIVERY",
      description: "Swift and reliable delivery service ensuring your food arrives hot and fresh at your doorstep.",
      cardClass: "quality-card fast-delivery"
    }
  ];

  return (
    <section 
      className="qualities-section" 
      id="qualities"
      style={{
        backgroundImage: `url('/3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      {/* Overlay for better readability */}
      <div className="background-overlay"></div>
      
      <div className="qualities-container">
        <div className="qualities-header">
          <h2 className="qualities-title">Why Choose Us</h2>
          <div className="title-underline"></div>
        </div>

        <div className="qualities-grid">
          {qualities.map((quality) => (
            <div key={quality.id} className={quality.cardClass}>
              <div className="quality-content">
                <div className="quality-icon">
                  <img
                    src={quality.image}
                    alt={quality.title}
                    className="icon-image"
                  />
                </div>
                <h3 className="quality-card-title">
                  {quality.title}
                </h3>
                <p className="quality-description">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;