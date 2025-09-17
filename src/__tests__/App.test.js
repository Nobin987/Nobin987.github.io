import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock all components to avoid complex rendering
jest.mock('../components/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header</div>;
  };
});

jest.mock('../components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero</div>;
  };
});

jest.mock('../components/About', () => {
  return function MockAbout() {
    return <div data-testid="about">About</div>;
  };
});

jest.mock('../components/Skills', () => {
  return function MockSkills() {
    return <div data-testid="skills">Skills</div>;
  };
});

jest.mock('../components/Projects', () => {
  return function MockProjects() {
    return <div data-testid="projects">Projects</div>;
  };
});

jest.mock('../components/Contact', () => {
  return function MockContact() {
    return <div data-testid="contact">Contact</div>;
  };
});

jest.mock('../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

jest.mock('../components/AccessibilityControls', () => {
  return function MockAccessibilityControls() {
    return <div data-testid="accessibility-controls">Accessibility Controls</div>;
  };
});

// Mock performance monitor
jest.mock('../utils/performanceMonitor', () => ({
  __esModule: true,
  default: {
    startMonitoring: jest.fn(),
    stopMonitoring: jest.fn(),
    onFPSChange: jest.fn()
  }
}));

describe('App', () => {
  test('renders all main components', () => {
    render(<App />);
    
    expect(screen.getByTestId('accessibility-controls')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('skills')).toBeInTheDocument();
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('starts performance monitoring on mount', () => {
    const performanceMonitor = require('../utils/performanceMonitor').default;
    
    render(<App />);
    
    expect(performanceMonitor.startMonitoring).toHaveBeenCalled();
    expect(performanceMonitor.onFPSChange).toHaveBeenCalled();
  });

  test('has correct CSS class', () => {
    const { container } = render(<App />);
    
    expect(container.firstChild).toHaveClass('App');
  });
});