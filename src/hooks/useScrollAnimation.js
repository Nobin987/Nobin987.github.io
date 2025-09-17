import { useState, useEffect, useRef } from 'react';
import { createIntersectionObserver, shouldReduceAnimations, isBatteryLow } from '../utils/performanceMonitor';

const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const manuallyDisabled = document.body.classList.contains('animations-disabled');
    
    if (prefersReducedMotion || manuallyDisabled) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Check device capabilities and battery
    const initializeAnimation = async () => {
      const batteryLow = await isBatteryLow();
      const shouldReduce = shouldReduceAnimations();
      
      if (batteryLow || shouldReduce) {
        setIsVisible(true);
        setHasAnimated(true);
        return;
      }

      // Create observer with fallback
      observerRef.current = createIntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const actualDelay = shouldReduce ? Math.min(delay, 100) : delay;
            
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
                if (observerRef.current) {
                  observerRef.current.unobserve(element);
                }
              }
            }, actualDelay);
          } else if (!triggerOnce && !hasAnimated) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin
        }
      );

      observerRef.current.observe(element);
    };

    initializeAnimation();

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref: elementRef, isVisible, hasAnimated };
};

export default useScrollAnimation;