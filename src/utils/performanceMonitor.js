// Performance monitoring utilities for animations

class PerformanceMonitor {
  constructor() {
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fps = 60;
    this.isMonitoring = false;
    this.callbacks = [];
  }

  startMonitoring() {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.measureFrame();
  }

  stopMonitoring() {
    this.isMonitoring = false;
  }

  measureFrame() {
    if (!this.isMonitoring) return;

    const currentTime = performance.now();
    this.frameCount++;

    // Calculate FPS every second
    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      this.frameCount = 0;
      this.lastTime = currentTime;

      // Notify callbacks of FPS change
      this.callbacks.forEach(callback => callback(this.fps));

      // Auto-adjust animation complexity based on performance
      if (this.fps < 30) {
        document.body.classList.add('low-performance');
      } else if (this.fps > 50) {
        document.body.classList.remove('low-performance');
      }
    }

    requestAnimationFrame(() => this.measureFrame());
  }

  onFPSChange(callback) {
    this.callbacks.push(callback);
  }

  getCurrentFPS() {
    return this.fps;
  }
}

// Singleton instance
const performanceMonitor = new PerformanceMonitor();

// Intersection Observer fallback for older browsers
export const createIntersectionObserver = (callback, options = {}) => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, options);
  }
  
  // Fallback: use scroll event with throttling
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Simple visibility check fallback
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            callback([{ target: element, isIntersecting: true }]);
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return {
    observe: (element) => {
      element.setAttribute('data-animate', 'true');
    },
    unobserve: (element) => {
      element.removeAttribute('data-animate');
    },
    disconnect: () => {
      window.removeEventListener('scroll', handleScroll);
    }
  };
};

// Memory management for animations
export const cleanupAnimations = () => {
  // Remove completed animation listeners
  const animatedElements = document.querySelectorAll('.animated-section');
  animatedElements.forEach(element => {
    element.removeEventListener('animationend', null);
    element.removeEventListener('transitionend', null);
  });
};

// Battery-aware animations
export const isBatteryLow = async () => {
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();
      return battery.level < 0.2 && !battery.charging;
    } catch (error) {
      return false;
    }
  }
  return false;
};

// Device capability detection
export const getDeviceCapabilities = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  return {
    hasWebGL: !!gl,
    deviceMemory: navigator.deviceMemory || 4, // Default to 4GB if not available
    hardwareConcurrency: navigator.hardwareConcurrency || 4,
    connectionType: navigator.connection?.effectiveType || '4g'
  };
};

// Adaptive animation complexity
export const shouldReduceAnimations = () => {
  const capabilities = getDeviceCapabilities();
  const currentFPS = performanceMonitor.getCurrentFPS();
  
  return (
    capabilities.deviceMemory < 2 ||
    capabilities.hardwareConcurrency < 4 ||
    capabilities.connectionType === 'slow-2g' ||
    capabilities.connectionType === '2g' ||
    currentFPS < 30
  );
};

export default performanceMonitor;