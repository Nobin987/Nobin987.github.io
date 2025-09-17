import performanceMonitor, { 
  createIntersectionObserver, 
  shouldReduceAnimations, 
  getDeviceCapabilities 
} from '../performanceMonitor';

// Mock performance API
global.performance = {
  now: jest.fn(() => Date.now())
};

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 16));

// Mock navigator properties
Object.defineProperty(navigator, 'deviceMemory', {
  writable: true,
  value: 4
});

Object.defineProperty(navigator, 'hardwareConcurrency', {
  writable: true,
  value: 4
});

Object.defineProperty(navigator, 'connection', {
  writable: true,
  value: { effectiveType: '4g' }
});

describe('PerformanceMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.className = '';
  });

  test('should start and stop monitoring', () => {
    expect(performanceMonitor.isMonitoring).toBe(false);
    
    performanceMonitor.startMonitoring();
    expect(performanceMonitor.isMonitoring).toBe(true);
    
    performanceMonitor.stopMonitoring();
    expect(performanceMonitor.isMonitoring).toBe(false);
  });

  test('should register FPS change callbacks', () => {
    const callback = jest.fn();
    performanceMonitor.onFPSChange(callback);
    
    expect(performanceMonitor.callbacks).toContain(callback);
  });

  test('should return current FPS', () => {
    const fps = performanceMonitor.getCurrentFPS();
    expect(typeof fps).toBe('number');
    expect(fps).toBeGreaterThanOrEqual(0);
  });
});

describe('createIntersectionObserver', () => {
  test('should create IntersectionObserver when supported', () => {
    const mockObserver = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn()
    };
    
    global.IntersectionObserver = jest.fn(() => mockObserver);
    
    const callback = jest.fn();
    const observer = createIntersectionObserver(callback);
    
    expect(global.IntersectionObserver).toHaveBeenCalledWith(callback, {});
    expect(observer).toBe(mockObserver);
  });

  test('should provide fallback when IntersectionObserver not supported', () => {
    delete global.IntersectionObserver;
    
    const callback = jest.fn();
    const observer = createIntersectionObserver(callback);
    
    expect(observer).toHaveProperty('observe');
    expect(observer).toHaveProperty('unobserve');
    expect(observer).toHaveProperty('disconnect');
  });
});

describe('getDeviceCapabilities', () => {
  test('should return device capabilities', () => {
    const capabilities = getDeviceCapabilities();
    
    expect(capabilities).toHaveProperty('hasWebGL');
    expect(capabilities).toHaveProperty('deviceMemory');
    expect(capabilities).toHaveProperty('hardwareConcurrency');
    expect(capabilities).toHaveProperty('connectionType');
    
    expect(typeof capabilities.hasWebGL).toBe('boolean');
    expect(typeof capabilities.deviceMemory).toBe('number');
    expect(typeof capabilities.hardwareConcurrency).toBe('number');
    expect(typeof capabilities.connectionType).toBe('string');
  });
});

describe('shouldReduceAnimations', () => {
  test('should return true for low-end devices', () => {
    // Mock low-end device
    Object.defineProperty(navigator, 'deviceMemory', {
      writable: true,
      value: 1
    });
    
    const shouldReduce = shouldReduceAnimations();
    expect(shouldReduce).toBe(true);
  });

  test('should return false for high-end devices', () => {
    // Mock high-end device
    Object.defineProperty(navigator, 'deviceMemory', {
      writable: true,
      value: 8
    });
    
    Object.defineProperty(navigator, 'hardwareConcurrency', {
      writable: true,
      value: 8
    });
    
    Object.defineProperty(navigator, 'connection', {
      writable: true,
      value: { effectiveType: '4g' }
    });
    
    // Mock good FPS
    performanceMonitor.fps = 60;
    
    const shouldReduce = shouldReduceAnimations();
    expect(shouldReduce).toBe(false);
  });

  test('should return true for slow connections', () => {
    Object.defineProperty(navigator, 'connection', {
      writable: true,
      value: { effectiveType: '2g' }
    });
    
    const shouldReduce = shouldReduceAnimations();
    expect(shouldReduce).toBe(true);
  });
});