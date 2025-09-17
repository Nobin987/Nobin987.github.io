import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Task Manager Pro",
      description: "A comprehensive task management app with Core Data integration, custom animations, and dark mode support.",
      technologies: "Swift, SwiftUI, Core Data, CloudKit",
      github: "#",
      appstore: "#"
    },
    {
      title: "Weather Forecast",
      description: "Beautiful weather app with location services, animated backgrounds, and 7-day forecasts.",
      technologies: "Swift, UIKit, MapKit, Core Location",
      github: "#",
      appstore: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness tracking app with HealthKit integration and custom workout plans.",
      technologies: "Swift, HealthKit, Charts, UserNotifications",
      github: "#",
      appstore: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              📱 {project.title}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <div className="project-links">
                <a href={project.github} className="project-link">GitHub</a>
                <a href={project.appstore} className="project-link">App Store</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;