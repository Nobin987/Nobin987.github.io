import React from 'react';
import AnimatedSection from './AnimatedSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { getStaggerDelay } from '../utils/animationConfig';

const Projects = () => {
  const projects = [
    {
      title: "Token Explorer",
      description: "A blockchain-powered mobile application that enables users to seamlessly search and explore tokens, wallet addresses, and transaction details across multiple networks. The app also integrates a secure digital crypto wallet, allowing users to manage their assets, monitor balances, and track real-time blockchain activity within a single, intuitive interface.",
      technologies: "SwiftUI, Combine, BlockChain, Socket",
      platform: "iOS",
      icon: {
        type: "image",
        src: "/images/projects/token.png",
        alt: "Token App Icon"
      },
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      period: "May 2024 – April 2025",
      github: null,
      appstore: "https://apps.apple.com/us/app/tokenb-explorer/id6747426865",
      type: "published"
    },
    {
      title: "Rags2Riches",
      description: "iOS application enabling users to upload ideas and participate in contests. Implemented comprehensive API integration and unit testing for enhanced stability.",
      technologies: "Swift, Cocoa Touch, Alamofire, AWS, Branch IO, Socket, XCTest",
      platform: "iOS",
      icon: {
        type: "image", // Options: "emoji", "image", "svg", "component"
        src: "/images/projects/rags2riches.jpeg", // Path to your custom icon
        alt: "Rags2Riches App Icon"
      },
      color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      period: "May 2024 – April 2025",
      github: null,
      appstore: null,
      type: "published"
    },
    {
      title: "ShowReel/B Cubed",
      description: "Built core features for an iOS application designed to deliver online courses and showcase user portfolios. Developed intuitive UI components for course browsing, enrollment, and progress tracking, while implementing portfolio presentation modules to help users highlight their skills and projects. Focused on creating a seamless and engaging learning and showcasing experience.",
      technologies: "Swift, Cocoa Touch, UIKit",
      platform: "iOS",
      icon: {
        type: "image",
        src: "/images/projects/showreel.jpeg",
      },
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      period: "January 2023 – December 2023",
      github: null,
      appstore: "https://apps.apple.com/app/showreel",
      type: "published"
    },
    {
      title: "TaskRabbit Clone",
      description: "React Native application enabling users to seamlessly discover and hire services across various categories. Built from ground up with enhanced functionality.",
      technologies: "React Native, JavaScript, Cross-platform APIs",
      platform: "Cross-Platform",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>`
      },
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      period: "March 2024 – April 2024",
      github: null,
      appstore: null,
      type: "opensource"
    },
    {
      title: "MultiCart",
      description: "E-commerce app enabling users to buy and sell products seamlessly. Revamped 10% of the user interface to improve usability and visual consistency, and contributed to SDK upgrades that enhanced overall functionality and performance.",
      technologies: "Swift, Cocoa Touch, iOS SDK",
      platform: "iOS",
      icon: {
        type: "image",
        src: "/images/projects/multicart-icon.png",
        alt: "MultiCart App Icon"
      },
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      period: "January 2024 – March 2024",
      github: null,
      appstore: "https://apps.apple.com/app/multicart",
      type: "published"
    },
    {
      title: "Shelter",
      description: "Property management iOS app built from ground up. Features photo upload, property details management, and robust search functionality for property exploration.",
      technologies: "Swift, Cocoa Touch, Core Data, Image Processing",
      platform: "iOS",
      icon: {
        type: "svg",
        content: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
        </svg>`
      },
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      period: "September 2022 – December 2022",
      github: null,
      appstore: null,
      type: "opensource"
    }
  ];

  // Icon Renderer Component
  const ProjectIcon = ({ icon }) => {
    // Handle both old format (direct string) and new format (object)
    if (typeof icon === 'string') {
      return <span className="project-icon-emoji">{icon}</span>;
    }

    switch (icon.type) {
      case 'image':
        return (
          <img
            src={icon.src}
            alt={icon.alt || 'Project Icon'}
            className="project-icon-image"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              e.target.style.display = 'none';
              const fallback = e.target.parentNode.querySelector('.project-icon-fallback');
              if (fallback) fallback.style.display = 'block';
            }}
          />
        );
      case 'svg':
        return (
          <div
            className="project-icon-svg"
            dangerouslySetInnerHTML={{ __html: icon.content }}
          />
        );
      case 'emoji':
        return <span className="project-icon-emoji">{icon.content}</span>;
      default:
        return <span className="project-icon-emoji">📱</span>;
    }
  };

  const ProjectCard = ({ project, index }) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold: 0.1,
      delay: getStaggerDelay(index, 0.1) * 1000
    });

    return (
      <div
        ref={ref}
        className={`project-card-enhanced ${isVisible ? 'animate-in' : ''}`}
        style={{
          animationDelay: `${getStaggerDelay(index, 0.1)}s`
        }}
      >
        {/* Animated Background Glow */}
        <div className="card-glow" style={{ background: project.color }}></div>

        {/* Interactive Overlay */}
        <div className="card-overlay"></div>

        {/* Main Card Content */}
        <div className="card-inner">
          {/* Enhanced Mobile Mockup */}
          <div className="enhanced-mockup">
            <div className="mockup-container">
              <div className="phone-device">
                <div className="phone-notch"></div>
                <div className="phone-display" style={{ background: project.color }}>
                  <div className="display-content">
                    <div className="app-showcase">
                      <div className="showcase-header">
                        <div className="signal-dots">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                        <div className="time">9:41</div>
                        <div className="battery-icon">
                          <div className="battery-level"></div>
                        </div>
                      </div>
                      <div className="app-icon-showcase">
                        <div className="icon-container">
                          <ProjectIcon icon={project.icon} />
                          <span className="project-icon-fallback" style={{ display: 'none' }}>
                            📱
                          </span>
                        </div>
                        <div className="app-name">{project.title}</div>
                      </div>
                      <div className="app-features">
                        <div className="feature-dot"></div>
                        <div className="feature-dot"></div>
                        <div className="feature-dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="enhanced-content">
            <div className="content-header">
              <div className="title-section">
                <h3 className="project-title">{project.title}</h3>
                <div className="platform-indicator">
                  <span className="platform-badge-new">{project.platform}</span>
                </div>
              </div>
              {project.period && (
                <div className="project-timeline">{project.period}</div>
              )}
            </div>

            <div className="project-description">
              <p>{project.description}</p>
            </div>

            <div className="tech-showcase">
              <div className="tech-label">Technologies</div>
              <div className="tech-grid">
                {project.technologies.split(', ').map((tech, techIndex) => (
                  <span key={techIndex} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="action-section">
              <div className="project-actions">
                {project.github && (
                  <a href={project.github} className="action-btn primary" target="_blank" rel="noopener noreferrer">
                    <div className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <span>View Code</span>
                    <div className="btn-ripple"></div>
                  </a>
                )}
                {project.appstore && (
                  <a href={project.appstore} className="action-btn secondary" target="_blank" rel="noopener noreferrer">
                    <div className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                    <span>Download</span>
                    <div className="btn-ripple"></div>
                  </a>
                )}
                {!project.github && !project.appstore && (
                  <div className="action-btn disabled">
                    <div className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                      </svg>
                    </div>
                    <span>Private</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section projects">
      {/* Optimized Floating Background Elements */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      {/* Reduced Floating App Icons */}
      <div className="floating-app-icon app-icon-1">📱</div>
      <div className="floating-app-icon app-icon-2">💻</div>

      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <h2>Featured Projects</h2>
      </AnimatedSection>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;