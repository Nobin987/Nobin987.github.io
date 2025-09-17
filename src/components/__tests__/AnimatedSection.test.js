import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedSection from '../AnimatedSection';

// Mock the useScrollAnimation hook
jest.mock('../../hooks/useScrollAnimation', () => {
  return jest.fn(() => ({
    ref: { current: null },
    isVisible: false,
    hasAnimated: false
  }));
});

// Mock the animation config
jest.mock('../../utils/animationConfig', () => ({
  createAnimationStyle: jest.fn(() => ({
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }))
}));

describe('AnimatedSection', () => {
  test('renders children correctly', () => {
    render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('applies correct CSS classes', () => {
    const { container } = render(
      <AnimatedSection className="custom-class">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    const animatedDiv = container.firstChild;
    expect(animatedDiv).toHaveClass('animated-section');
    expect(animatedDiv).toHaveClass('custom-class');
  });

  test('passes through additional props', () => {
    render(
      <AnimatedSection data-testid="animated-section" aria-label="Test Section">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    const section = screen.getByTestId('animated-section');
    expect(section).toHaveAttribute('aria-label', 'Test Section');
  });

  test('applies animation styles when visible', () => {
    const useScrollAnimation = require('../../hooks/useScrollAnimation');
    useScrollAnimation.mockReturnValue({
      ref: { current: null },
      isVisible: true,
      hasAnimated: true
    });

    const { createAnimationStyle } = require('../../utils/animationConfig');
    createAnimationStyle.mockReturnValue({
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    const { container } = render(
      <AnimatedSection animation="fadeInUp">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    expect(createAnimationStyle).toHaveBeenCalledWith(true, 'fadeInUp', 0);
  });
});