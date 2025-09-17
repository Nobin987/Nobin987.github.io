import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: "iOS Development",
      description: "Swift, SwiftUI, UIKit, Xcode, iOS SDK"
    },
    {
      title: "Architecture Patterns",
      description: "MVVM, MVC, VIPER, Clean Architecture"
    },
    {
      title: "Data & Networking",
      description: "Core Data, URLSession, Alamofire, REST APIs"
    },
    {
      title: "Testing & Debugging",
      description: "XCTest, UI Testing, Instruments, Debugging"
    },
    {
      title: "Version Control",
      description: "Git, GitHub, GitLab, Bitbucket"
    },
    {
      title: "Additional Skills",
      description: "Firebase, Push Notifications, App Store Connect"
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;