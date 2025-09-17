import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section about">
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <h2>About Me</h2>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <div className="about-content">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="profile-image"
          />
          <div className="about-text">
            <p>
              I'm a passionate mobile app developer with over 3 years of experience creating
              innovative applications across multiple platforms. I specialize in <strong>iOS development </strong>
              with Swift, SwiftUI, and UIKit, while also building cross-platform solutions
              with React Native and native Android development.
            </p>
            <p>
              My journey in mobile development started with iOS, where I developed a deep
              understanding of Apple's design principles and development ecosystem. This foundation
              has enabled me to create exceptional user experiences across all mobile platforms,
              with a particular expertise in iOS app architecture and performance optimization.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest mobile development trends,
              contributing to open-source projects, or sharing knowledge with the developer community
              about iOS, React Native, and mobile app best practices.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;