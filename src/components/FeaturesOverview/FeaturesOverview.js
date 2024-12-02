import React from 'react';
import './FeaturesOverview.css';

const FeaturesOverview = ({ isDarkMode }) => {
  const features = [
    {
      icon: "fa-laptop-code",
      title: "Interactive Simulations",
      description: "Visualize Logic Gates, Binary Counter and more."
    },
    {
      icon: "fa-book-reader",
      title: "Comprehensive Tutorials",
      description: "Step-by-step guides to master digital electronics."
    },
    {
      icon: "fa-trophy",
      title: "Quizzes and Challenges",
      description: "Test your knowledge and improve."
    },
    {
        icon: "fa-graduation-cap",
        title: "Beginner-Friendly",
        description: "Designed for students with no prior experience in Digital Electronics."
    }
  ];

  return (
    <section className={`features-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="features-container">
        <h2>Why Choose Digital World?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview; 