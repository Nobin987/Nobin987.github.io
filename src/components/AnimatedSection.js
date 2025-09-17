import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { createAnimationStyle } from '../utils/animationConfig';

const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    delay: delay * 1000, // Convert to milliseconds
    triggerOnce: true
  });

  const animationStyle = createAnimationStyle(isVisible, animation, delay);

  return (
    <div 
      ref={ref}
      className={`animated-section ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;