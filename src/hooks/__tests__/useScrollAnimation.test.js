import { renderHook, act } from '@testing-library/react';
import useScrollAnimation from '../useScrollAnimation';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock matchMedia for reduced motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('useScrollAnimation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with correct default values', () => {
    const { result } = renderHook(() => useScrollAnimation());
    
    expect(result.current.isVisible).toBe(false);
    expect(result.current.hasAnimated).toBe(false);
    expect(result.current.ref).toBeDefined();
  });

  test('should respect reduced motion preferences', () => {
    // Mock reduced motion preference
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useScrollAnimation());
    
    expect(result.current.isVisible).toBe(true);
    expect(result.current.hasAnimated).toBe(true);
  });

  test('should handle IntersectionObserver callback', () => {
    let intersectionCallback;
    
    mockIntersectionObserver.mockImplementation((callback) => {
      intersectionCallback = callback;
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn()
      };
    });

    const { result } = renderHook(() => useScrollAnimation());
    
    // Simulate intersection
    act(() => {
      intersectionCallback([{ isIntersecting: true }]);
    });
    
    expect(result.current.isVisible).toBe(true);
  });

  test('should apply custom threshold and delay', () => {
    const options = {
      threshold: 0.5,
      delay: 500
    };
    
    renderHook(() => useScrollAnimation(options));
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.5
      })
    );
  });

  test('should cleanup observer on unmount', () => {
    const mockUnobserve = jest.fn();
    const mockDisconnect = jest.fn();
    
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn(),
      unobserve: mockUnobserve,
      disconnect: mockDisconnect
    });

    const { unmount } = renderHook(() => useScrollAnimation());
    
    unmount();
    
    expect(mockDisconnect).toHaveBeenCalled();
  });
});