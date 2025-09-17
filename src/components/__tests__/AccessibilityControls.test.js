import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityControls from '../AccessibilityControls';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('AccessibilityControls', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.className = '';
  });

  test('renders accessibility toggle button', () => {
    render(<AccessibilityControls />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Disable animations');
  });

  test('loads saved preference from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('true');
    
    render(<AccessibilityControls />);
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('animations-disabled');
    expect(document.body).toHaveClass('animations-disabled');
  });

  test('toggles animations when button is clicked', () => {
    render(<AccessibilityControls />);
    
    const button = screen.getByRole('button');
    
    // Initially animations should be enabled
    expect(button).toHaveAttribute('aria-label', 'Disable animations');
    expect(screen.getByText('Disable')).toBeInTheDocument();
    
    // Click to disable animations
    fireEvent.click(button);
    
    expect(button).toHaveAttribute('aria-label', 'Enable animations');
    expect(screen.getByText('Enable')).toBeInTheDocument();
    expect(document.body).toHaveClass('animations-disabled');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('animations-disabled', 'true');
    
    // Click again to enable animations
    fireEvent.click(button);
    
    expect(button).toHaveAttribute('aria-label', 'Disable animations');
    expect(screen.getByText('Disable')).toBeInTheDocument();
    expect(document.body).not.toHaveClass('animations-disabled');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('animations-disabled', 'false');
  });

  test('displays correct icons for animation state', () => {
    render(<AccessibilityControls />);
    
    const button = screen.getByRole('button');
    
    // Initially should show pause icon (animations enabled)
    expect(button.textContent).toContain('⏸️');
    
    // After clicking, should show play icon (animations disabled)
    fireEvent.click(button);
    expect(button.textContent).toContain('🎬');
  });
});