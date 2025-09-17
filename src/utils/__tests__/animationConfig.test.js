import { 
  animationConfig, 
  mobileTheme, 
  getStaggerDelay, 
  createAnimationStyle 
} from '../animationConfig';

describe('animationConfig', () => {
  test('should have correct duration values', () => {
    expect(animationConfig.duration).toEqual({
      fast: '0.3s',
      medium: '0.6s',
      slow: '1s',
      extraSlow: '1.5s'
    });
  });

  test('should have correct easing values', () => {
    expect(animationConfig.easing).toHaveProperty('mobile');
    expect(animationConfig.easing).toHaveProperty('ios');
    expect(animationConfig.easing).toHaveProperty('bounce');
    expect(animationConfig.easing).toHaveProperty('smooth');
  });

  test('should have correct delay values', () => {
    expect(animationConfig.delays).toEqual({
      stagger: 0.1,
      section: 0.2,
      card: 0.05
    });
  });
});

describe('mobileTheme', () => {
  test('should have iOS-style colors', () => {
    expect(mobileTheme.colors.primary).toBe('#007AFF');
    expect(mobileTheme.colors.secondary).toBe('#34C759');
    expect(mobileTheme.colors.accent).toBe('#FF9500');
  });

  test('should have mobile-appropriate shadows', () => {
    expect(mobileTheme.shadows).toHaveProperty('card');
    expect(mobileTheme.shadows).toHaveProperty('elevated');
    expect(mobileTheme.shadows).toHaveProperty('floating');
    expect(mobileTheme.shadows).toHaveProperty('hover');
  });

  test('should have mobile-friendly border radius values', () => {
    expect(mobileTheme.borderRadius.small).toBe('8px');
    expect(mobileTheme.borderRadius.medium).toBe('12px');
    expect(mobileTheme.borderRadius.large).toBe('20px');
  });
});

describe('getStaggerDelay', () => {
  test('should calculate correct stagger delay', () => {
    expect(getStaggerDelay(0)).toBe(0);
    expect(getStaggerDelay(1)).toBe(0.1);
    expect(getStaggerDelay(2)).toBe(0.2);
  });

  test('should apply base delay correctly', () => {
    expect(getStaggerDelay(0, 0.5)).toBe(0.5);
    expect(getStaggerDelay(1, 0.5)).toBe(0.6);
    expect(getStaggerDelay(2, 0.5)).toBe(0.7);
  });
});

describe('createAnimationStyle', () => {
  test('should return invisible styles when not visible', () => {
    const style = createAnimationStyle(false, 'fadeInUp', 0);
    
    expect(style.opacity).toBe(0);
    expect(style.transform).toBe('translateY(30px)');
    expect(style.transition).toContain('0.6s');
  });

  test('should return visible styles when visible', () => {
    const style = createAnimationStyle(true, 'fadeInUp', 0);
    
    expect(style.opacity).toBe(1);
    expect(style.transform).toBe('translateY(0) translateX(0) scale(1)');
  });

  test('should handle different animation types', () => {
    const fadeInLeft = createAnimationStyle(false, 'fadeInLeft', 0);
    expect(fadeInLeft.transform).toBe('translateX(-30px)');
    
    const fadeInRight = createAnimationStyle(false, 'fadeInRight', 0);
    expect(fadeInRight.transform).toBe('translateX(30px)');
    
    const scaleIn = createAnimationStyle(false, 'scaleIn', 0);
    expect(scaleIn.transform).toBe('scale(0.8)');
  });

  test('should apply correct delay', () => {
    const style = createAnimationStyle(false, 'fadeInUp', 0.5);
    
    expect(style.transitionDelay).toBe('0.5s');
  });

  test('should handle unknown animation types', () => {
    const style = createAnimationStyle(false, 'unknownAnimation', 0);
    
    expect(style.opacity).toBe(0);
    expect(style.transform).toBeUndefined();
  });
});