import React from 'react';
import AnimatedSection from './AnimatedSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { getStaggerDelay } from '../utils/animationConfig';

const Skills = () => {
  const skills = [
    {
      title: "iOS Development",
      description: "Swift, Objective-C, UIKit, SwiftUI, Core Data, AVFoundation",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>`
      },
      level: 95
    },
    {
      title: "React Native",
      description: "Cross-platform development, JavaScript, Native Modules",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 1a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 23l2.31-4.31C18.16 17.67 21 14.17 21 10a9 9 0 0 0-9-9z"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" stroke-width="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(120 12 12)"/>
        </svg>`
      },
      level: 85
    },
    {
      title: "Android Development",
      description: "Kotlin, Android Studio, Material Design",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
        </svg>`
      },
      level: 80
    },
    {
      title: "Programming Languages",
      description: "Swift, Kotlin, JavaScript, C++, C, HTML, CSS",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>`
      },
      level: 90
    },
    {
      title: "Frameworks & Libraries",
      description: "Core Animation, Combine, Alamofire, Realm, Stripe",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>`
      },
      level: 88
    },
    {
      title: "Tools & Databases",
      description: "Xcode, VSCode, Git, Firebase, MongoDB, SQLite",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
        </svg>`
      },
      level: 85
    }
  ];

  // Icon Renderer Component for Skills
  const SkillIcon = ({ icon }) => {
    // Handle both old format (direct string) and new format (object)
    if (typeof icon === 'string') {
      return <span className="skill-icon-emoji">{icon}</span>;
    }

    if (icon.type === 'svg') {
      return (
        <div 
          className="skill-icon-svg"
          dangerouslySetInnerHTML={{ __html: icon.content }}
        />
      );
    }

    return <span className="skill-icon-emoji">🔧</span>;
  };

  const SkillCard = ({ skill, index }) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold: 0.3,
      delay: getStaggerDelay(index, 0.1) * 1000
    });

    return (
      <div 
        ref={ref}
        className={`skill-card ${isVisible ? 'animate-in' : ''}`}
        style={{
          animationDelay: `${getStaggerDelay(index, 0.1)}s`
        }}
      >
        <div className="skill-icon">
          <SkillIcon icon={skill.icon} />
        </div>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
        <div className="skill-level">
          <div className="skill-bar">
            <div 
              className="skill-progress"
              style={{
                width: isVisible ? `${skill.level}%` : '0%'
              }}
            ></div>
          </div>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section skills">
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <h2>Skills & Expertise</h2>
      </AnimatedSection>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;