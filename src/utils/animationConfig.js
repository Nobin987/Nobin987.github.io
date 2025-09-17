// Animation configuration constants
export const animationConfig = {
  duration: {
    fast: '0.3s',
    medium: '0.6s',
    slow: '1s',
    extraSlow: '1.5s'
  },
  easing: {
    mobile: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Material Design
    ios: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // iOS-like
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  },
  delays: {
    stagger: 0.1, // For sequential animations
    section: 0.2, // Between sections
    card: 0.05   // For card animations
  }
};

// Mobile theme configuration
export const mobileTheme = {
  colors: {
    primary: '#007AFF', // iOS Blue
    secondary: '#34C759', // iOS Green
    accent: '#FF9500', // iOS Orange
    background: {
      light: '#F2F2F7',
      dark: '#1C1C1E'
    },
    text: {
      primary: '#000000',
      secondary: '#3C3C43',
      tertiary: '#8E8E93'
    }
  },
  shadows: {
    card: '0 4px 20px rgba(0, 0, 0, 0.1)',
    elevated: '0 8px 30px rgba(0, 0, 0, 0.15)',
    floating: '0 12px 40px rgba(0, 0, 0, 0.2)',
    hover: '0 10px 25px rgba(0, 122, 255, 0.3)'
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '20px',
    extraLarge: '28px',
    round: '50%'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  }
};

// Animation utility functions
export const getStaggerDelay = (index, baseDelay = 0) => {
  return baseDelay + (index * animationConfig.delays.stagger);
};

export const createAnimationStyle = (isVisible, animationType = 'fadeInUp', delay = 0) => {
  const baseStyle = {
    transition: `all ${animationConfig.duration.medium} ${animationConfig.easing.ios}`,
    transitionDelay: `${delay}s`
  };

  if (!isVisible) {
    switch (animationType) {
      case 'fadeInUp':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translateY(30px)'
        };
      case 'fadeInLeft':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translateX(-30px)'
        };
      case 'fadeInRight':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'translateX(30px)'
        };
      case 'scaleIn':
        return {
          ...baseStyle,
          opacity: 0,
          transform: 'scale(0.8)'
        };
      default:
        return {
          ...baseStyle,
          opacity: 0
        };
    }
  }

  return {
    ...baseStyle,
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)'
  };
};