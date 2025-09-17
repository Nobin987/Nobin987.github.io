import React from 'react';
import AnimatedSection from './AnimatedSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { getStaggerDelay } from '../utils/animationConfig';

const Experience = () => {
  const experiences = [
    {
      title: "iOS Software Engineer",
      company: "Token 13 Software LLC",
      location: "Dubai, UAE",
      period: "April 2025 – Current",
      type: "Full-time",
      description: "Driving the end-to-end development of a secure crypto wallet application with seamless blockchain integration. Implemented core wallet features including asset management, transaction handling, and real-time blockchain synchronization. Focused on building a robust, scalable, and user-friendly mobile experience while ensuring top-level security and performance.",
      achievements: [
        "Designed and developed a secure crypto wallet with support for multiple digital assets",
        "Integrated blockchain APIs and smart contract interactions for seamless transactions",
        "Implemented advanced security measures including key management and encryption",
        "Optimized wallet performance to ensure smooth synchronization with blockchain networks",
        "Collaborated with cross-functional teams to deliver a scalable and user-friendly experience"
      ],
      technologies: ["SwiftUI", "Combine", "UIKit", "Xcode", "Git"],
      icon: "👨‍💻",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Software Engineer",
      company: "Armia Systems",
      location: "Kochi, Kerala",
      period: "August 2024 – April 2025",
      type: "Full-time",
      description: "Led the development of iOS applications from ground up and successfully released them on the App Store. Conducted extensive R&D to integrate cutting-edge technologies into projects, including React Native for cross-platform solutions.",
      achievements: [
        "Led iOS application development from conception to App Store release",
        "Conducted R&D for integrating React Native cross-platform solutions",
        "Optimized code for better performance and ensured adherence to best practices",
        "Integrated various libraries and SDKs for enhanced functionality"
      ],
      technologies: ["Swift", "React Native", "iOS SDK", "Xcode", "Git"],
      icon: "👨‍💻",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Junior Software Engineer",
      company: "Armia Systems",
      location: "Kochi, Kerala",
      period: "February 2023 – August 2024",
      type: "Full-time",
      description: "Assisted in developing and maintaining iOS applications, contributing to feature enhancements and bug fixes. Collaborated with cross-functional teams to deliver projects on time and align with client requirements.",
      achievements: [
        "Developed and maintained iOS applications with feature enhancements",
        "Collaborated with cross-functional teams for timely project delivery",
        "Contributed to bug fixes and application stability improvements",
        "Aligned development work with client requirements and specifications"
      ],
      technologies: ["Swift", "UIKit", "Core Data", "Alamofire", "Firebase"],
      icon: "👨‍💻",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Junior Software Engineer Trainee",
      company: "Armia Systems",
      location: "Kochi, Kerala",
      period: "August 2022 – February 2023",
      type: "Trainee",
      description: "Gained hands-on experience in iOS development, focusing on Swift and Xcode. Contributed to the testing and debugging of iOS applications, ensuring smooth functionality.",
      achievements: [
        "Gained comprehensive hands-on experience in iOS development",
        "Focused on Swift programming and Xcode development environment",
        "Contributed to testing and debugging of iOS applications",
        "Supported senior developers in implementing key features and maintenance"
      ],
      technologies: ["Swift", "Xcode", "iOS Fundamentals", "Debugging", "Testing"],
      icon: "👨‍💻",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const ExperienceCard = ({ experience, index }) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold: 0.2,
      delay: getStaggerDelay(index, 0.2) * 1000
    });

    return (
      <div
        ref={ref}
        className={`experience-card ${isVisible ? 'animate-in' : ''}`}
        style={{
          animationDelay: `${getStaggerDelay(index, 0.2)}s`
        }}
      >
        <div className="experience-timeline">
          <div className="timeline-dot" style={{ background: experience.color }}>
            <span className="timeline-icon">{experience.icon}</span>
          </div>
          <div className="timeline-line"></div>
        </div>

        <div className="experience-content">
          <div className="experience-header">
            <div className="experience-title-section">
              <h3 className="experience-title">{experience.title}</h3>
              <div className="experience-company">
                <span className="company-name">{experience.company}</span>
                <span className="company-location">{experience.location}</span>
              </div>
            </div>
            <div className="experience-meta">
              <span className="experience-period">{experience.period}</span>
              <span className="experience-type">{experience.type}</span>
            </div>
          </div>

          <div className="experience-description">
            <p>{experience.description}</p>
          </div>

          <div className="experience-achievements">
            <h4>Key Achievements</h4>
            <ul>
              {experience.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="experience-technologies">
            <div className="tech-label">Technologies Used</div>
            <div className="tech-tags">
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="section experience">
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <h2>Professional Experience</h2>
        <p className="section-subtitle">My journey in mobile app development</p>
      </AnimatedSection>

      <div className="experience-timeline-container">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;