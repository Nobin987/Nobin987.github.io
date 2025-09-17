import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="https://via.placeholder.com/250x250/007AFF/FFFFFF?text=Your+Photo" 
          alt="Profile" 
          className="profile-image"
        />
        <div className="about-text">
          <p>
            I'm a passionate iOS developer with over 3 years of experience creating 
            innovative mobile applications. I specialize in Swift, SwiftUI, and UIKit, 
            with a strong focus on user experience and clean, maintainable code.
          </p>
          <p>
            My journey in iOS development started with a curiosity about how apps work, 
            and has evolved into a deep passion for creating solutions that make people's 
            lives easier and more enjoyable.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest iOS features, 
            contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;